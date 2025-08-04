
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'

// Import pages
import Home from '@/pages/Home'
import TenCodes from '@/pages/BasicCodes/TenCodes'
import CodeComms from '@/pages/BasicCodes/CodeComms'
import PrioritySequence from '@/pages/BasicCodes/PrioritySequence'
import PatrolAreas from '@/pages/BasicCodes/PatrolAreas'
import ShortForms from '@/pages/ShortForms'
import Amendments from '@/pages/Amendments'
import Training from '@/pages/SOP/Training'
import MEU from '@/pages/SOP/MEU'
import SEU from '@/pages/SOP/SEU'
import ASD from '@/pages/SOP/ASD'
import Dispatcher from '@/pages/SOP/Dispatcher'
import CaseLaws from '@/pages/CaseLaws'
import Terms from '@/pages/AdvancedSOP/Terms'
import Types from '@/pages/PenalCodes/Types'
import Felony from '@/pages/PenalCodes/Felony'
import Misdemeanor from '@/pages/PenalCodes/Misdemeanor'
import Infraction from '@/pages/PenalCodes/Infraction'
import SituationQuestions from '@/pages/PenalCodes/SituationQuestions'
import ConfusingTopics from '@/pages/PenalCodes/ConfusingTopics'
import SampleCalls from '@/pages/PD/SampleCalls'
import InGameCommands from '@/pages/PD/InGameCommands'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-codes/10-codes" element={<TenCodes />} />
            <Route path="/basic-codes/code-comms" element={<CodeComms />} />
            <Route path="/basic-codes/priority-sequence" element={<PrioritySequence />} />
            <Route path="/basic-codes/patrol-areas" element={<PatrolAreas />} />
            <Route path="/short-forms" element={<ShortForms />} />
            <Route path="/amendments" element={<Amendments />} />
            <Route path="/sop/training" element={<Training />} />
            <Route path="/sop/meu" element={<MEU />} />
            <Route path="/sop/seu" element={<SEU />} />
            <Route path="/sop/asd" element={<ASD />} />
            <Route path="/sop/dispatcher" element={<Dispatcher />} />
            <Route path="/case-laws" element={<CaseLaws />} />
            <Route path="/advanced-sop/terms" element={<Terms />} />
            <Route path="/penal-codes/types" element={<Types />} />
            <Route path="/penal-codes/felony" element={<Felony />} />
            <Route path="/penal-codes/misdemeanor" element={<Misdemeanor />} />
            <Route path="/penal-codes/infraction" element={<Infraction />} />
            <Route path="/situation-questions" element={<SituationQuestions />} />
            <Route path="/confusing-topics" element={<ConfusingTopics />} />
            <Route path="/pd/sample-calls" element={<SampleCalls />} />
            <Route path="/pd/in-game-commands" element={<InGameCommands />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </ThemeProvider>
  )
}

export default App
