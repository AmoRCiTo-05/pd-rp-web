# Quiz Learning Follow-Up

## Build
- Extend parsed quiz questions with optional explanation and learn-more metadata, without changing parsing of existing MCQ text.
- Add a focused topic map that matches existing rank/category question text and connects relevant concepts to the site's existing guides.
- Merge matching learning notes when a quiz loads; leave unmatched questions valid and unchanged.
- Show explanations and guide links only in the completed quiz's answer review, with stronger visual emphasis for missed answers and mobile-friendly stacking.
- Preserve answer selection, scoring, saved progress, retakes, back navigation, and existing quiz routes/lists. Add the optional scenario-practice link to results.

## Technical details
- Keep matching rules and concise explanations in `src/data/quizLearnMore.ts`; apply them to a copied quiz in `QuizComponent` after parsing.
- Use React Router `Link` for guide navigation and semantic theme tokens for the explanation treatment.
- Record the new data-module boundary in `AGENTS.md`; validate with the available build and a completed quiz flow.