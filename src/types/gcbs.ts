export interface StudyStep {
  id: number;
  name: string;
  shortName: string;
  description: string;
  guidingQuestions: string[];
  helpContent: string;
  theologicalContext?: string;
}

export interface Study {
  id: string;
  title: string;
  passageReference: string;
  createdAt: string;
  updatedAt: string;
  currentStep: number;
  steps: StudyStepData[];
}

export interface StudyStepData {
  stepId: number;
  notes: string;
  completed: boolean;
}

export const STUDY_STEPS: StudyStep[] = [
  {
    id: 1,
    name: "Text",
    shortName: "Text",
    description: "Establish the passage you will study",
    guidingQuestions: [
      "What is the specific passage reference (book, chapter, verses)?",
      "Have you read the passage multiple times in different translations?",
      "What are the natural paragraph or section breaks within the text?",
      "Are there any textual variants or translation differences to note?"
    ],
    helpContent: "The Text step establishes the foundation for your study. Scripture is inspired, inerrant, and infallible—God's very words to His people. Take time to read the passage slowly and carefully, noting the exact boundaries of the text. Consider reading it aloud to hear the rhythm and emphasis. The goal is to encounter the text fresh, setting aside assumptions.",
    theologicalContext: "Reformed theology affirms the perspicuity of Scripture—that the essential truths necessary for salvation are clearly taught. Yet this clarity doesn't mean study is unnecessary. The Westminster Confession states that 'all things in Scripture are not alike plain in themselves, nor alike clear unto all' (WCF 1.7). Careful attention to the text honors God's self-revelation."
  },
  {
    id: 2,
    name: "Context",
    shortName: "Context",
    description: "Understand the historical, literary, and redemptive-historical setting",
    guidingQuestions: [
      "Who wrote this passage, to whom, and when?",
      "What was the historical situation of the original audience?",
      "Where does this passage fall in the book's overall structure and argument?",
      "What genre is this text (narrative, poetry, prophecy, epistle, apocalyptic)?",
      "What comes immediately before and after this passage?"
    ],
    helpContent: "Context prevents misinterpretation. A text without context becomes a pretext. Understanding the author's intent, the original audience's situation, and the literary flow helps us hear what God was communicating then, so we can understand what He says now. The Bible was written FOR us, but not TO us—we must bridge the gap carefully.",
    theologicalContext: "The grammatical-historical method of interpretation has been the standard Reformed approach. Calvin emphasized that 'Scripture interprets Scripture'—the analogy of faith. No passage stands alone; it participates in the one unified story of redemption that culminates in Christ. The New Testament authors themselves read the Old Testament this way (Luke 24:27, 44-47)."
  },
  {
    id: 3,
    name: "Content",
    shortName: "Content",
    description: "Examine what the passage actually says",
    guidingQuestions: [
      "What are the key words, phrases, and concepts in this passage?",
      "What is the main idea or theme of this text?",
      "What commands, promises, warnings, or examples are present?",
      "How does the author develop the argument or narrative?",
      "What literary devices or structures are used (parallelism, chiasm, repetition)?"
    ],
    helpContent: "Content analysis involves careful observation. What does the text actually say? Look for repeated words, contrasts, cause-and-effect statements, and logical connectors. Outline the passage. Define key terms using biblical word studies, not modern assumptions. The goal is to understand the author's intended meaning before moving to application.",
    theologicalContext: "The Reformers recovered the literal sense of Scripture (sensus literalis)—not wooden literalism, but the meaning intended by the human author under divine inspiration. This stands against allegorical interpretation that finds hidden meanings not grounded in the text. As the London Baptist Confession states, 'The infallible rule of interpretation of Scripture is the Scripture itself.'"
  },
  {
    id: 4,
    name: "Biblical Truth",
    shortName: "Truth",
    description: "Identify the timeless theological principle",
    guidingQuestions: [
      "What does this passage reveal about God's character and ways?",
      "What theological truths transcend the original context?",
      "How does this connect to the broader teaching of Scripture?",
      "What doctrines are taught, illustrated, or assumed here?",
      "How would you state the main theological principle in one sentence?"
    ],
    helpContent: "Biblical truth bridges the ancient text to timeless theology. We're looking for what is universally true—not just what was true for Israel or the early church, but what remains true for all people in all times because it reflects God's unchanging nature and purposes. This is where exegesis becomes theology.",
    theologicalContext: "Reformed theology emphasizes that Scripture has one divine Author working through many human authors, resulting in a unified theological message. The Westminster Standards organize this into systematic categories: theology proper, Christology, soteriology, ecclesiology, and eschatology. Every passage contributes to this unified whole, and every passage must be read in light of the whole."
  },
  {
    id: 5,
    name: "Fallen Condition",
    shortName: "FCF",
    description: "Identify the human problem the passage addresses",
    guidingQuestions: [
      "What aspect of human sinfulness or brokenness does this passage address?",
      "What temptations, struggles, or false beliefs are challenged here?",
      "Why did the original audience need to hear this truth?",
      "How does this connect to our shared human condition after the Fall?",
      "What would be lacking in life or faith without this truth?"
    ],
    helpContent: "The Fallen Condition Focus (FCF) identifies why we need this passage. Every text addresses some aspect of our brokenness—whether it's a specific sin, a temptation, ignorance, suffering, or a false belief. Without identifying the FCF, application becomes moralistic. We're not just asking 'What should I do?' but 'What is wrong that requires this word from God?'",
    theologicalContext: "Total depravity doesn't mean we're as bad as possible, but that sin affects every part of human existence. The FCF reflects this reality. Reformed theology insists that apart from grace, we cannot properly understand or obey God's Word. Identifying the FCF reminds us we're not neutral people receiving helpful advice—we're fallen people desperately needing redemption."
  },
  {
    id: 6,
    name: "Redemption in Christ",
    shortName: "Christ",
    description: "Discover how Christ is the ultimate answer to the fallen condition",
    guidingQuestions: [
      "How does this passage point to Christ or find its fulfillment in Him?",
      "How does the gospel—Christ's life, death, resurrection, and reign—address the FCF?",
      "What has Christ accomplished that we could never accomplish ourselves?",
      "How does this text fit into the redemptive-historical storyline culminating in Christ?",
      "What aspects of Christ's work (prophet, priest, king) are relevant here?"
    ],
    helpContent: "This is the heart of gospel-centered interpretation. Jesus said all Scripture testifies about Him (John 5:39). Every passage finds its ultimate meaning in Christ. He is the true Israel, the faithful Adam, the obedient Son, the perfect sacrifice. The question isn't 'What would Jesus do?' but 'What has Jesus done?' Gospel-centered application flows from redemption accomplished, not human effort.",
    theologicalContext: "Christ is the scopus of Scripture—its central focus and interpretive key. This isn't about forcing Jesus into every verse artificially, but recognizing that 'the testimony of Jesus is the spirit of prophecy' (Rev 19:10). The threefold office of Christ (munus triplex) helps: as Prophet, He reveals truth; as Priest, He reconciles sinners; as King, He rules with authority. Every FCF finds its answer in one of these offices."
  },
  {
    id: 7,
    name: "Faith in Christ",
    shortName: "Faith",
    description: "Respond to Christ's work with faith, not works",
    guidingQuestions: [
      "What does it look like to trust Christ in light of this passage?",
      "How does believing the gospel address the fears, doubts, or sins exposed?",
      "What promises of God can be claimed by faith?",
      "How does union with Christ empower obedience here?",
      "What would unbelief look like in this situation?"
    ],
    helpContent: "Faith is not passive—it actively rests in Christ's finished work. This step asks: How do we believe the gospel in light of this passage? What does it look like to trust that Christ has addressed our FCF? Faith precedes and enables obedience. We don't obey to earn God's favor; we obey because we already have it in Christ. This prevents both license and legalism.",
    theologicalContext: "Sola fide—faith alone—is the instrument of justification. But Reformed theology equally emphasizes that faith is never alone; it always produces works. The Westminster Larger Catechism asks, 'What is faith in Jesus Christ?' Answer: 'a saving grace, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel' (WLC 72). Faith is both receptive and responsive."
  },
  {
    id: 8,
    name: "Application",
    shortName: "Apply",
    description: "Live out the truth through the power of the gospel",
    guidingQuestions: [
      "What specific actions, attitudes, or beliefs should change?",
      "How does the gospel empower and motivate this obedience?",
      "What practical steps can be taken this week?",
      "How does this application flow from gratitude, not guilt?",
      "What role does community play in living this out?"
    ],
    helpContent: "Gospel-centered application is different from moralism. Moralism says: 'Here's what the Bible says to do. Now go do it.' This leads to self-righteousness when we succeed and despair when we fail. Gospel-centered application says: 'Here's what Christ has done. Now, in grateful response and by His Spirit's power, live this out.' The pattern is always: EXAMINE what the text calls for → CONFESS where you fall short → REPENT of self-reliance → BELIEVE the gospel again → OBEY from gratitude.",
    theologicalContext: "The third use of the law (tertius usus legis) guides believers in godly living—not as a ladder to earn salvation, but as a grateful response to salvation received. Calvin called this the 'principal use' of the law. Application must always be grounded in indicatives (what God has done) before imperatives (what we must do). As Paul models: 'I appeal to you therefore, brothers, by the mercies of God' (Rom 12:1)—the 'therefore' points back to 11 chapters of gospel."
  }
];

export const MORALISM_VS_GOSPEL = {
  moralism: {
    approach: "Here's what the Bible says. Now go do it.",
    outcomes: {
      success: "Self-righteousness and pride",
      failure: "Despair and guilt"
    },
    focus: "Human effort and willpower",
    motivation: "Fear of punishment or desire for reward"
  },
  gospelCentered: {
    approach: "Here's what Christ has done. Now live in grateful response.",
    outcomes: {
      success: "Humility—knowing it's by grace",
      failure: "Hope—knowing Christ's work is complete"
    },
    focus: "Christ's finished work and Spirit's power",
    motivation: "Gratitude for grace received"
  },
  applicationPattern: [
    "EXAMINE what the text calls for",
    "CONFESS where you fall short",
    "REPENT of self-reliance",
    "BELIEVE the gospel again",
    "OBEY from gratitude"
  ]
};
