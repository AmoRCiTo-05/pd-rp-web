import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";
// Extract only literal guide facts, never executable UI or generated marketing copy.
const pages: Record<string, string> = {
  "/amendments": "Amendments",
  "/case-laws": "CaseLaws",
  "/penal-codes/types": "PenalCodes/Types",
  "/penal-codes/felony": "PenalCodes/Felony",
  "/penal-codes/misdemeanor": "PenalCodes/Misdemeanor",
  "/penal-codes/infraction": "PenalCodes/Infraction",
  "/sop/training": "SOP/Training",
  "/sop/meu": "SOP/MEU",
  "/sop/seu": "SOP/SEU",
  "/sop/asd": "SOP/ASD",
  "/sop/dispatcher": "SOP/Dispatcher",
};
const facts: Record<
  string,
  { title: string; detail: string; number?: string; classification?: string }[]
> = {};
for (const [href, file] of Object.entries(pages)) {
  const source = ts.createSourceFile(
    file,
    readFileSync(`src/pages/${file}.tsx`, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const rows: (typeof facts)[string] = [];
  function visit(node: ts.Node) {
    if (ts.isObjectLiteralExpression(node)) {
      const obj: Record<string, string> = {};
      for (const prop of node.properties)
        if (
          ts.isPropertyAssignment(prop) &&
          (ts.isStringLiteral(prop.initializer) ||
            ts.isNoSubstitutionTemplateLiteral(prop.initializer))
        )
          obj[prop.name.getText(source).replace(/['"]/g, "")] =
            prop.initializer.text;
      const title = obj.offense || obj.title;
      const detail = obj.description || obj.content;
      if (title && detail)
        rows.push({
          title,
          detail,
          ...(obj.number ? { number: obj.number } : {}),
          ...(obj.classification ? { classification: obj.classification } : {}),
        });
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  if (!rows.length) {
    const text = (node: ts.Node): string => {
      if (ts.isJsxText(node)) return node.text.replace(/\s+/g, " ").trim();
      let parts: string[] = [];
      ts.forEachChild(node, (n) => {
        const value = text(n);
        if (value) parts.push(value);
      });
      return parts.join(" ");
    };
    function cards(node: ts.Node) {
      if (
        ts.isJsxElement(node) &&
        node.openingElement.tagName.getText(source) === "Card"
      ) {
        let title = "",
          detail = "";
        function parts(n: ts.Node) {
          if (ts.isJsxElement(n)) {
            const tag = n.openingElement.tagName.getText(source);
            if (tag === "CardTitle") title = text(n);
            if (tag === "CardContent") detail = text(n);
          }
          ts.forEachChild(n, parts);
        }
        parts(node);
        if (title && detail) rows.push({ title, detail });
      }
      ts.forEachChild(node, cards);
    }
    cards(source);
  }
  facts[href] = rows;
  console.log(href, rows.length);
}
writeFileSync(
  "src/data/guideFacts.json",
  JSON.stringify(facts, null, 2) + "\n",
);
