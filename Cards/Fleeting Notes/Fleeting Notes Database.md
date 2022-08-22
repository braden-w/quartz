---

database-plugin: basic

---
# Fleeting Notes Database

<%%
name: new database
description: new description
columns:
  __file__:
    key: __file__
    input: markdown
    label: File
    accessor: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: true
      source_data: current_folder
  tags:
    input: tags
    key: tags
    accessor: tags
    label: tags
    position: 0
    options:
      - { label: "Topics/Happiness", backgroundColor: "hsl(332, 95%, 90%)"}
      - { label: "Topics/Context", backgroundColor: "hsl(306, 95%, 90%)"}
      - { label: "Topics/Surroundings", backgroundColor: "hsl(191, 95%, 90%)"}
      - { label: "Quotes", backgroundColor: "hsl(257, 95%, 90%)"}
      - { label: "Topics/Generalist", backgroundColor: "hsl(349, 95%, 90%)"}
      - { label: "Topics/Specialist", backgroundColor: "hsl(61, 95%, 90%)"}
      - { label: "Topics/Leadership", backgroundColor: "hsl(115, 95%, 90%)"}
      - { label: "Topics/Feedback", backgroundColor: "hsl(197, 95%, 90%)"}
      - { label: "Topics/Criticism", backgroundColor: "hsl(174, 95%, 90%)"}
      - { label: "Topics/Comeback", backgroundColor: "hsl(42, 95%, 90%)"}
      - { label: "Topics/Monkey", backgroundColor: "hsl(336, 95%, 90%)"}
      - { label: "Topics/Evolution", backgroundColor: "hsl(148, 95%, 90%)"}
      - { label: "Topics/Racism", backgroundColor: "hsl(133, 95%, 90%)"}
      - { label: "Type/Comeback", backgroundColor: "hsl(213, 95%, 90%)"}
      - { label: "Topics/Masculinity", backgroundColor: "hsl(354, 95%, 90%)"}
      - { label: "Topics/Relationships", backgroundColor: "hsl(272, 95%, 90%)"}
      - { label: "Topics/Sex", backgroundColor: "hsl(311, 95%, 90%)"}
      - { label: "Topics/Writeup_Snippets", backgroundColor: "hsl(183, 95%, 90%)"}
      - { label: "Topics/Texts", backgroundColor: "hsl(220, 95%, 90%)"}
      - { label: "Topics/Negotiation", backgroundColor: "hsl(18, 95%, 90%)"}
      - { label: "Type/Writeup_Snippets/Posts", backgroundColor: "hsl(244, 95%, 90%)"}
      - { label: "Topics/Coding", backgroundColor: "hsl(175, 95%, 90%)"}
      - { label: "team-special-projects", backgroundColor: "hsl(127, 95%, 90%)"}
      - { label: "Topics/Start_with_Why", backgroundColor: "hsl(305, 95%, 90%)"}
      - { label: "Topics/Effective_Altruism", backgroundColor: "hsl(99, 95%, 90%)"}
      - { label: "Topics/Meals", backgroundColor: "hsl(290, 95%, 90%)"}
      - { label: "Topics/Advice", backgroundColor: "hsl(61, 95%, 90%)"}
      - { label: "Topics/Admissions", backgroundColor: "hsl(262, 95%, 90%)"}
      - { label: "Topics/Courses", backgroundColor: "hsl(223, 95%, 90%)"}
      - { label: "Topics/Resume", backgroundColor: "hsl(106, 95%, 90%)"}
      - { label: "Topics/Applications", backgroundColor: "hsl(333, 95%, 90%)"}
      - { label: "Topics/Sleep", backgroundColor: "hsl(139, 95%, 90%)"}
      - { label: "Type/Reference", backgroundColor: "hsl(85, 95%, 90%)"}
      - { label: "Topics/YouTube", backgroundColor: "hsl(78, 95%, 90%)"}
      - { label: "Topics/Blogging", backgroundColor: "hsl(23, 95%, 90%)"}
      - { label: "summer-incubator", backgroundColor: "hsl(276, 95%, 90%)"}
      - { label: "Topics/YEA", backgroundColor: "hsl(270, 95%, 90%)"}
      - { label: "Topics/Entrepreneurship", backgroundColor: "hsl(35, 95%, 90%)"}
      - { label: "Type/Calls", backgroundColor: "hsl(113, 95%, 90%)"}
      - { label: "Topics/Calls", backgroundColor: "hsl(143, 95%, 90%)"}
      - { label: "Topics/Recruiting", backgroundColor: "hsl(143, 95%, 90%)"}
      - { label: "Type/Writeup_Snippets/Texts", backgroundColor: "hsl(319, 95%, 90%)"}
      - { label: "Type/Writeup_Snippets/Requests", backgroundColor: "hsl(265, 95%, 90%)"}
      - { label: "Topics/NP_Hard", backgroundColor: "hsl(139, 95%, 90%)"}
      - { label: "Topics/NP_Complete", backgroundColor: "hsl(355, 95%, 90%)"}
      - { label: "Topics/NP", backgroundColor: "hsl(21, 95%, 90%)"}
      - { label: "Topics/Complexity", backgroundColor: "hsl(318, 95%, 90%)"}
      - { label: "Topics/Navy_Seals", backgroundColor: "hsl(78, 95%, 90%)"}
      - { label: "Topics/Inspiration", backgroundColor: "hsl(167, 95%, 90%)"}
      - { label: "Topics/Grit", backgroundColor: "hsl(336, 95%, 90%)"}
      - { label: "Topics/Excuses", backgroundColor: "hsl(160, 95%, 90%)"}
      - { label: "Topics/Disability", backgroundColor: "hsl(154, 95%, 90%)"}
      - { label: "Topics/Radiation", backgroundColor: "hsl(343, 95%, 90%)"}
      - { label: "Topics/Health", backgroundColor: "hsl(111, 95%, 90%)"}
      - { label: "Topics/Facts", backgroundColor: "hsl(316, 95%, 90%)"}
      - { label: "Topics/French", backgroundColor: "hsl(145, 95%, 90%)"}
      - { label: "Quotes/Proverbs", backgroundColor: "hsl(178, 95%, 90%)"}
      - { label: "Coding", backgroundColor: "hsl(322, 95%, 90%)"}
      - { label: "Source/Talks", backgroundColor: "hsl(209, 95%, 90%)"}
      - { label: "Topics/Software_Engineering", backgroundColor: "hsl(189, 95%, 90%)"}
      - { label: "Topics/Monopoly", backgroundColor: "hsl(71, 95%, 90%)"}
      - { label: "Topics/Video_Games", backgroundColor: "hsl(84, 95%, 90%)"}
      - { label: "Topics/Affirmative_Action", backgroundColor: "hsl(27, 95%, 90%)"}
      - { label: "Topics/College", backgroundColor: "hsl(141, 95%, 90%)"}
      - { label: "Topics/Inequality", backgroundColor: "hsl(2, 95%, 90%)"}
      - { label: "Topics/University", backgroundColor: "hsl(177, 95%, 90%)"}
      - { label: "Topics/Hot_Takes", backgroundColor: "hsl(338, 95%, 90%)"}
      - { label: "Topics/Artificial_Intelligence", backgroundColor: "hsl(84, 95%, 90%)"}
      - { label: "Clubs", backgroundColor: "hsl(230, 95%, 90%)"}
      - { label: "Effective_Altruism", backgroundColor: "hsl(154, 95%, 90%)"}
      - { label: "Hot_Takes", backgroundColor: "hsl(55, 95%, 90%)"}
      - { label: "Organization", backgroundColor: "hsl(11, 95%, 90%)"}
      - { label: "Topics/World_War_2", backgroundColor: "hsl(162, 95%, 90%)"}
      - { label: "Topics/War", backgroundColor: "hsl(102, 95%, 90%)"}
      - { label: "Topics/Diplomacy", backgroundColor: "hsl(335, 95%, 90%)"}
      - { label: "Topics/Chemical_Weapons", backgroundColor: "hsl(205, 95%, 90%)"}
      - { label: "Topics/Always_Check_Contracts", backgroundColor: "hsl(45, 95%, 90%)"}
      - { label: "Topics/English", backgroundColor: "hsl(303, 95%, 90%)"}
      - { label: "Topics/Fun_Facts", backgroundColor: "hsl(48, 95%, 90%)"}
      - { label: "Topics/Aggression", backgroundColor: "hsl(16, 95%, 90%)"}
      - { label: "Topics/Politics", backgroundColor: "hsl(163, 95%, 90%)"}
      - { label: "Topics/Conservatism", backgroundColor: "hsl(251, 95%, 90%)"}
      - { label: "Topics/Progressivism", backgroundColor: "hsl(176, 95%, 90%)"}
      - { label: "Topics/Natural_Selection", backgroundColor: "hsl(176, 95%, 90%)"}
      - { label: "Topics/Insects", backgroundColor: "hsl(137, 95%, 90%)"}
      - { label: "Topics/Altruism", backgroundColor: "hsl(80, 95%, 90%)"}
      - { label: "Topics/Growth", backgroundColor: "hsl(250, 95%, 90%)"}
      - { label: "Topics/Tests", backgroundColor: "hsl(297, 95%, 90%)"}
      - { label: "Topics/Cheating", backgroundColor: "hsl(175, 95%, 90%)"}
      - { label: "Topics/Residual_Graph", backgroundColor: "hsl(248, 95%, 90%)"}
      - { label: "Topics/Motivation", backgroundColor: "hsl(315, 95%, 90%)"}
      - { label: "Topics/Specialization", backgroundColor: "hsl(222, 95%, 90%)"}
      - { label: "Topics/Reproduction", backgroundColor: "hsl(284, 95%, 90%)"}
      - { label: "Topics/Daughter", backgroundColor: "hsl(70, 95%, 90%)"}
      - { label: "Topics/Children", backgroundColor: "hsl(3, 95%, 90%)"}
      - { label: "Topics/Algorithms", backgroundColor: "hsl(195, 95%, 90%)"}
      - { label: "Topics/Graph_Theory", backgroundColor: "hsl(30, 95%, 90%)"}
      - { label: "Topics/Physics", backgroundColor: "hsl(41, 95%, 90%)"}
      - { label: "Topics/Currency", backgroundColor: "hsl(224, 95%, 90%)"}
      - { label: "Topics/Productivity", backgroundColor: "hsl(321, 95%, 90%)"}
      - { label: "Topics/AdviceProductivi", backgroundColor: "hsl(287, 95%, 90%)"}
      - { label: "Topics/Wheat", backgroundColor: "hsl(310, 95%, 90%)"}
      - { label: "Topics/Disruptive_Technologies", backgroundColor: "hsl(132, 95%, 90%)"}
      - { label: "Topics/Bread", backgroundColor: "hsl(138, 95%, 90%)"}
      - { label: "Topics/Greedy_Algorithms", backgroundColor: "hsl(192, 95%, 90%)"}
      - { label: "Topics/Britain", backgroundColor: "hsl(36, 95%, 90%)"}
      - { label: "Topics/Vacation", backgroundColor: "hsl(145, 95%, 90%)"}
      - { label: "Topics/Country", backgroundColor: "hsl(134, 95%, 90%)"}
      - { label: "Topics/Emotions", backgroundColor: "hsl(199, 95%, 90%)"}
      - { label: "Topics/Political_Science", backgroundColor: "hsl(358, 95%, 90%)"}
      - { label: "Topics/Welding", backgroundColor: "hsl(168, 95%, 90%)"}
      - { label: "Topics/Steel", backgroundColor: "hsl(268, 95%, 90%)"}
      - { label: "Topics/Economics", backgroundColor: "hsl(330, 95%, 90%)"}
      - { label: "Topics/Power", backgroundColor: "hsl(239, 95%, 90%)"}
      - { label: "Concepts", backgroundColor: "hsl(294, 95%, 90%)"}
      - { label: "Topics/Programming", backgroundColor: "hsl(100, 95%, 90%)"}
      - { label: "Topics/Computer_Science", backgroundColor: "hsl(333, 95%, 90%)"}
      - { label: "Topics/Typing", backgroundColor: "hsl(86, 95%, 90%)"}
      - { label: "Topics/Writing", backgroundColor: "hsl(49, 95%, 90%)"}
      - { label: "Topics/Showers", backgroundColor: "hsl(197, 95%, 90%)"}
      - { label: "Topics/Cold_Showers", backgroundColor: "hsl(300, 95%, 90%)"}
      - { label: "Topics/Twitter", backgroundColor: "hsl(246, 95%, 90%)"}
      - { label: "Topics/Yale_University", backgroundColor: "hsl(344, 95%, 90%)"}
      - { label: "Topics/Psychology", backgroundColor: "hsl(267, 95%, 90%)"}
      - { label: "Topics/Social_Contract_Theory", backgroundColor: "hsl(336, 95%, 90%)"}
      - { label: "Topics/Religion", backgroundColor: "hsl(348, 95%, 90%)"}
      - { label: "Topics/Confucianism", backgroundColor: "hsl(230, 95%, 90%)"}
      - { label: "Topics/Conservatism, Topics/Politics", backgroundColor: "hsl(83, 95%, 90%)"}
      - { label: "Topics/Stress", backgroundColor: "hsl(125, 95%, 90%)"}
      - { label: "Topics/Morning", backgroundColor: "hsl(103, 95%, 90%)"}
      - { label: "Topics/Habits", backgroundColor: "hsl(13, 95%, 90%)"}
      - { label: "Topics/Exercise", backgroundColor: "hsl(348, 95%, 90%)"}
      - { label: "Topics/Takes", backgroundColor: "hsl(146, 95%, 90%)"}
      - { label: "Topics/Counter-Strike", backgroundColor: "hsl(175, 95%, 90%)"}
      - { label: "Topics/Bayesian_Thinking", backgroundColor: "hsl(80, 95%, 90%)"}
      - { label: "Topics/Motto", backgroundColor: "hsl(199, 95%, 90%)"}
      - { label: "Topics/Mantra", backgroundColor: "hsl(335, 95%, 90%)"}
      - { label: "Topics/Life", backgroundColor: "hsl(252, 95%, 90%)"}
      - { label: "Topics/Technology", backgroundColor: "hsl(271, 95%, 90%)"}
      - { label: "Topics/Microprocessors", backgroundColor: "hsl(10, 95%, 90%)"}
      - { label: "Topics/Brazil", backgroundColor: "hsl(321, 95%, 90%)"}
      - { label: "Topics/Self-Improvement", backgroundColor: "hsl(198, 95%, 90%)"}
      - { label: "Topics/Constructive_Feedback", backgroundColor: "hsl(50, 95%, 90%)"}
      - { label: "Topics/Meditation", backgroundColor: "hsl(127, 95%, 90%)"}
      - { label: "Topics/Defense, Topics/Hot_Takes", backgroundColor: "hsl(70, 95%, 90%)"}
      - { label: "Topics/Scaling", backgroundColor: "hsl(146, 95%, 90%)"}
      - { label: "Topics/Policy", backgroundColor: "hsl(212, 95%, 90%)"}
      - { label: "Topics/Spotify", backgroundColor: "hsl(357, 95%, 90%)"}
      - { label: "Topics/Philosophy", backgroundColor: "hsl(114, 95%, 90%)"}
      - { label: "Topics/Questions", backgroundColor: "hsl(135, 95%, 90%)"}
      - { label: "Topics/Congress", backgroundColor: "hsl(124, 95%, 90%)"}
      - { label: "Topics/Overthink", backgroundColor: "hsl(309, 95%, 90%)"}
      - { label: "Topics/Drones", backgroundColor: "hsl(269, 95%, 90%)"}
      - { label: "Topics/Cost_Benefit_Analysis", backgroundColor: "hsl(351, 95%, 90%)"}
      - { label: "Topics/Game_Theory", backgroundColor: "hsl(23, 95%, 90%)"}
      - { label: "Topics/Elections", backgroundColor: "hsl(357, 95%, 90%)"}
      - { label: "Topics/Machine_Learning", backgroundColor: "hsl(81, 95%, 90%)"}
      - { label: "Type/Tips", backgroundColor: "hsl(37, 95%, 90%)"}
      - { label: "Topics/Impact_Investing", backgroundColor: "hsl(230, 95%, 90%)"}
      - { label: "Cheating", backgroundColor: "hsl(17, 95%, 90%)"}
      - { label: "Students", backgroundColor: "hsl(91, 95%, 90%)"}
      - { label: "Topics/Longtermism", backgroundColor: "hsl(171, 95%, 90%)"}
      - { label: "Empathy", backgroundColor: "hsl(14, 95%, 90%)"}
      - { label: "Topics/Labor", backgroundColor: "hsl(57, 95%, 90%)"}
      - { label: "Topics/SpaceX", backgroundColor: "hsl(37, 95%, 90%)"}
      - { label: "Topics/Engineering", backgroundColor: "hsl(178, 95%, 90%)"}
      - { label: "Topics/Trust_the_Process", backgroundColor: "hsl(23, 95%, 90%)"}
      - { label: "Topics/Flow_Problems", backgroundColor: "hsl(239, 95%, 90%)"}
      - { label: "Topics/Work", backgroundColor: "hsl(285, 95%, 90%)"}
      - { label: "Topics/Food", backgroundColor: "hsl(305, 95%, 90%)"}
      - { label: "Topics/Compensation", backgroundColor: "hsl(67, 95%, 90%)"}
      - { label: "Topics/Friends", backgroundColor: "hsl(40, 95%, 90%)"}
      - { label: "Type/Story", backgroundColor: "hsl(246, 95%, 90%)"}
      - { label: "Topics/Youtube_Notes", backgroundColor: "hsl(13, 95%, 90%)"}
      - { label: "Topics/Trade_Integration", backgroundColor: "hsl(239, 95%, 90%)"}
      - { label: "Topics/Trade", backgroundColor: "hsl(297, 95%, 90%)"}
      - { label: "Topics/Rage", backgroundColor: "hsl(305, 95%, 90%)"}
      - { label: "Topics/Protest", backgroundColor: "hsl(167, 95%, 90%)"}
      - { label: "Topics/Anger", backgroundColor: "hsl(91, 95%, 90%)"}
      - { label: "Topics/Music", backgroundColor: "hsl(3, 95%, 90%)"}
      - { label: "Topics/Cycles", backgroundColor: "hsl(156, 95%, 90%)"}
      - { label: "Topics/Monogamy", backgroundColor: "hsl(319, 95%, 90%)"}
      - { label: "Topics/Society", backgroundColor: "hsl(24, 95%, 90%)"}
      - { label: "Joke", backgroundColor: "hsl(261, 95%, 90%)"}
      - { label: "Topics/Populism", backgroundColor: "hsl(104, 95%, 90%)"}
      - { label: "Topics/Favorite", backgroundColor: "hsl(289, 95%, 90%)"}
      - { label: "Youtube_Notes", backgroundColor: "hsl(115, 95%, 90%)"}
      - { label: "Topics/Domestic", backgroundColor: "hsl(282, 95%, 90%)"}
      - { label: "Topics/Women", backgroundColor: "hsl(264, 95%, 90%)"}
      - { label: "Topics/Interpersonal", backgroundColor: "hsl(332, 95%, 90%)"}
      - { label: "Topics/Storytelling", backgroundColor: "hsl(7, 95%, 90%)"}
      - { label: "Topics/Content_Creation", backgroundColor: "hsl(344, 95%, 90%)"}
      - { label: "Topics/Zettelkasten", backgroundColor: "hsl(317, 95%, 90%)"}
      - { label: "Topics/Map_of_Content", backgroundColor: "hsl(212, 95%, 90%)"}
      - { label: "Topics/Web_Development", backgroundColor: "hsl(300, 95%, 90%)"}
      - { label: "Topics/Family", backgroundColor: "hsl(215, 95%, 90%)"}
      - { label: "Topics/Adversity", backgroundColor: "hsl(312, 95%, 90%)"}
      - { label: "Topics/Conflict", backgroundColor: "hsl(230, 95%, 90%)"}
      - { label: "Type/Reflection", backgroundColor: "hsl(338, 95%, 90%)"}
      - { label: "Topics/Immigration", backgroundColor: "hsl(181, 95%, 90%)"}
      - { label: "Type/Questions", backgroundColor: "hsl(135, 95%, 90%)"}
      - { label: "Topics/Bonding", backgroundColor: "hsl(5, 95%, 90%)"}
      - { label: "Type/Lists", backgroundColor: "hsl(245, 95%, 90%)"}
      - { label: "Topics/Intuition", backgroundColor: "hsl(226, 95%, 90%)"}
      - { label: "Topics/Braden_Wong", backgroundColor: "hsl(122, 95%, 90%)"}
      - { label: "Topics/Friendship", backgroundColor: "hsl(49, 95%, 90%)"}
      - { label: "Reaching_Out", backgroundColor: "hsl(97, 95%, 90%)"}
      - { label: "Writing/Interpersonal", backgroundColor: "hsl(115, 95%, 90%)"}
      - { label: "Topics/Generations", backgroundColor: "hsl(115, 95%, 90%)"}
      - { label: "Topics/Democracy", backgroundColor: "hsl(21, 95%, 90%)"}
      - { label: "Topics/Nuclear_Risk", backgroundColor: "hsl(275, 95%, 90%)"}
      - { label: "India", backgroundColor: "hsl(280, 95%, 90%)"}
      - { label: "Testing", backgroundColor: "hsl(0, 95%, 90%)"}
      - { label: "Type/YouTube_Notes", backgroundColor: "hsl(13, 95%, 90%)"}
      - { label: "Topics/Whales", backgroundColor: "hsl(153, 95%, 90%)"}
      - { label: "Topics/Orcas", backgroundColor: "hsl(314, 95%, 90%)"}
      - { label: "Topics/Animals", backgroundColor: "hsl(335, 95%, 90%)"}
      - { label: "Topics/Personal_Life", backgroundColor: "hsl(155, 95%, 90%)"}
      - { label: "Topics/Language", backgroundColor: "hsl(199, 95%, 90%)"}
      - { label: "Topics/Heritage", backgroundColor: "hsl(262, 95%, 90%)"}
      - { label: "Topics/Private_Prisons", backgroundColor: "hsl(93, 95%, 90%)"}
      - { label: "Topics/Political_Science/Politics", backgroundColor: "hsl(145, 95%, 90%)"}
      - { label: "Topics/Police", backgroundColor: "hsl(335, 95%, 90%)"}
      - { label: "Topics/Criminal_Justice", backgroundColor: "hsl(131, 95%, 90%)"}
      - { label: "Topics/Fashion, Topics/Waste, Topics/Fast_Fashion", backgroundColor: "hsl(157, 95%, 90%)"}
      - { label: "Topics/Melting_Pot", backgroundColor: "hsl(40, 95%, 90%)"}
      - { label: "Topics/Fitness", backgroundColor: "hsl(67, 95%, 90%)"}
      - { label: "Topics/Java", backgroundColor: "hsl(108, 95%, 90%)"}
      - { label: "Topics/Flying", backgroundColor: "hsl(185, 95%, 90%)"}
      - { label: "Topics/Flight", backgroundColor: "hsl(48, 95%, 90%)"}
      - { label: "Topics/Airlines", backgroundColor: "hsl(220, 95%, 90%)"}
      - { label: "Topics/Biases", backgroundColor: "hsl(121, 95%, 90%)"}
      - { label: "Topics/Beliefs", backgroundColor: "hsl(112, 95%, 90%)"}
      - { label: "Topics/Snakes", backgroundColor: "hsl(162, 95%, 90%)"}
      - { label: "Topics/Schedule", backgroundColor: "hsl(93, 95%, 90%)"}
      - { label: "Topics/Leetcode", backgroundColor: "hsl(171, 95%, 90%)"}
      - { label: "Topics/Calculus", backgroundColor: "hsl(183, 95%, 90%)"}
      - { label: "Topics/Passive_Income", backgroundColor: "hsl(225, 95%, 90%)"}
      - { label: "Topics/Active_Income", backgroundColor: "hsl(357, 95%, 90%)"}
      - { label: "Topics/Virus", backgroundColor: "hsl(153, 95%, 90%)"}
      - { label: "Class", backgroundColor: "hsl(111, 95%, 90%)"}
      - { label: "University", backgroundColor: "hsl(256, 95%, 90%)"}
      - { label: "Topics/Preference_Update", backgroundColor: "hsl(190, 95%, 90%)"}
      - { label: "Topics/Preference_Change", backgroundColor: "hsl(303, 95%, 90%)"}
      - { label: "Topics/Experience", backgroundColor: "hsl(347, 95%, 90%)"}
      - { label: "Topics/Computers", backgroundColor: "hsl(184, 95%, 90%)"}
      - { label: "Topics/Expanding_the_Pie", backgroundColor: "hsl(190, 95%, 90%)"}
      - { label: "Topics/Energy", backgroundColor: "hsl(131, 95%, 90%)"}
      - { label: "Topics/Population_Ethics", backgroundColor: "hsl(219, 95%, 90%)"}
      - { label: "Topics/Phrases", backgroundColor: "hsl(44, 95%, 90%)"}
      - { label: "Topics/Education", backgroundColor: "hsl(300, 95%, 90%)"}
      - { label: "Topics/Optimization_Problems", backgroundColor: "hsl(142, 95%, 90%)"}
      - { label: "Topics/Ford-Fulkerson", backgroundColor: "hsl(188, 95%, 90%)"}
      - { label: "Topics/Flow_Networks", backgroundColor: "hsl(314, 95%, 90%)"}
      - { label: "Topics/Podcast_Notes", backgroundColor: "hsl(331, 95%, 90%)"}
      - { label: "Progress", backgroundColor: "hsl(157, 95%, 90%)"}
      - { label: "Examples", backgroundColor: "hsl(218, 95%, 90%)"}
      - { label: "Type/Meeting/Calls", backgroundColor: "hsl(1, 95%, 90%)"}
      - { label: "Topics/Cut", backgroundColor: "hsl(275, 95%, 90%)"}
      - { label: "Topics/Military", backgroundColor: "hsl(246, 95%, 90%)"}
      - { label: "Topics/Disease", backgroundColor: "hsl(140, 95%, 90%)"}
      - { label: "Topics/Biorisk", backgroundColor: "hsl(113, 95%, 90%)"}
      - { label: "Topics/Unfairness, Topics/Rage, Topics/Inequality, Topics/Inequity, Topics/Anger, Topics/Fairness", backgroundColor: "hsl(200, 95%, 90%)"}
      - { label: "Type/Ideas", backgroundColor: "hsl(140, 95%, 90%)"}
      - { label: "Topics/Existential_Risk", backgroundColor: "hsl(175, 95%, 90%)"}
      - { label: "Topics/Wealth", backgroundColor: "hsl(182, 95%, 90%)"}
      - { label: "Topics/Open_Source", backgroundColor: "hsl(292, 95%, 90%)"}
      - { label: "Topics/Creativity", backgroundColor: "hsl(81, 95%, 90%)"}
      - { label: "Topics/YPU", backgroundColor: "hsl(321, 95%, 90%)"}
      - { label: "Topics/Failure", backgroundColor: "hsl(2, 95%, 90%)"}
      - { label: "Topics/Income", backgroundColor: "hsl(331, 95%, 90%)"}
      - { label: "Topics/Google", backgroundColor: "hsl(37, 95%, 90%)"}
      - { label: "Topics/Flutter", backgroundColor: "hsl(85, 95%, 90%)"}
      - { label: "Topics/Gen_Z", backgroundColor: "hsl(139, 95%, 90%)"}
      - { label: "Topics/Boomer_Generation", backgroundColor: "hsl(43, 95%, 90%)"}
      - { label: "Topics/Why", backgroundColor: "hsl(109, 95%, 90%)"}
      - { label: "Topics/Mission", backgroundColor: "hsl(321, 95%, 90%)"}
      - { label: "Topics/Invasion", backgroundColor: "hsl(307, 95%, 90%)"}
      - { label: "Topics/International_Relations", backgroundColor: "hsl(230, 95%, 90%)"}
      - { label: "Topics/Machine_Learning/Models", backgroundColor: "hsl(356, 95%, 90%)"}
      - { label: "Topics/Skin_in_the_Game", backgroundColor: "hsl(345, 95%, 90%)"}
      - { label: "Topics/Commitment_Problems", backgroundColor: "hsl(69, 95%, 90%)"}
      - { label: "Topics/Lontermism", backgroundColor: "hsl(46, 95%, 90%)"}
      - { label: "Topics/Prioritization", backgroundColor: "hsl(21, 95%, 90%)"}
      - { label: "Topics/Effective", backgroundColor: "hsl(235, 95%, 90%)"}
      - { label: "Topics/Progressivism, Topics/Politics", backgroundColor: "hsl(263, 95%, 90%)"}
      - { label: "Topics/Quantum_Physics", backgroundColor: "hsl(167, 95%, 90%)"}
      - { label: "Duality", backgroundColor: "hsl(205, 95%, 90%)"}
      - { label: "Hardware", backgroundColor: "hsl(140, 95%, 90%)"}
      - { label: "Topics/Warning", backgroundColor: "hsl(69, 95%, 90%)"}
      - { label: "Topics/Signaling", backgroundColor: "hsl(311, 95%, 90%)"}
      - { label: "Topics/Home_Invasion", backgroundColor: "hsl(17, 95%, 90%)"}
      - { label: "Topics/Demonstrations_of_Irrationality", backgroundColor: "hsl(48, 95%, 90%)"}
      - { label: "Topics/Emotion", backgroundColor: "hsl(45, 95%, 90%)"}
      - { label: "Topics/SAT_Problem", backgroundColor: "hsl(4, 95%, 90%)"}
      - { label: "Topics/Radio", backgroundColor: "hsl(127, 95%, 90%)"}
      - { label: "Topics/5G_Regulators", backgroundColor: "hsl(182, 95%, 90%)"}
      - { label: "Topics/Utilitarianism", backgroundColor: "hsl(247, 95%, 90%)"}
      - { label: "Topics/Consequentialism", backgroundColor: "hsl(345, 95%, 90%)"}
      - { label: "Topics/Suffering", backgroundColor: "hsl(72, 95%, 90%)"}
      - { label: "Topics/Russia", backgroundColor: "hsl(285, 95%, 90%)"}
      - { label: "Topics/Fairness", backgroundColor: "hsl(319, 95%, 90%)"}
      - { label: "Type/Examples", backgroundColor: "hsl(158, 95%, 90%)"}
      - { label: "Topics/Apology", backgroundColor: "hsl(256, 95%, 90%)"}
      - { label: "Topics/Signalling", backgroundColor: "hsl(14, 95%, 90%)"}
      - { label: "Topics/Simplicity", backgroundColor: "hsl(75, 95%, 90%)"}
      - { label: "Topics/Ease", backgroundColor: "hsl(65, 95%, 90%)"}
      - { label: "Type/Themes", backgroundColor: "hsl(130, 95%, 90%)"}
      - { label: "Topics/Solutions", backgroundColor: "hsl(246, 95%, 90%)"}
      - { label: "Topics/Stanford", backgroundColor: "hsl(177, 95%, 90%)"}
      - { label: "Topics/Clubs", backgroundColor: "hsl(103, 95%, 90%)"}
      - { label: "Topics/Learning", backgroundColor: "hsl(48, 95%, 90%)"}
      - { label: "Comparisons", backgroundColor: "hsl(132, 95%, 90%)"}
      - { label: "Topics/Concepts", backgroundColor: "hsl(203, 95%, 90%)"}
      - { label: "AI", backgroundColor: "hsl(187, 95%, 90%)"}
      - { label: "Topics/Tesla", backgroundColor: "hsl(5, 95%, 90%)"}
      - { label: "Topics/Philanthropy", backgroundColor: "hsl(77, 95%, 90%)"}
      - { label: "Topics/Battery_Revolution", backgroundColor: "hsl(204, 95%, 90%)"}
      - { label: "Topics/Art", backgroundColor: "hsl(154, 95%, 90%)"}
      - { label: "Topics/Television", backgroundColor: "hsl(41, 95%, 90%)"}
      - { label: "Topics/Deterrence", backgroundColor: "hsl(195, 95%, 90%)"}
      - { label: "Type/Opinions", backgroundColor: "hsl(260, 95%, 90%)"}
      - { label: "Topics/Preparedness", backgroundColor: "hsl(52, 95%, 90%)"}
      - { label: "Topics/Boxing", backgroundColor: "hsl(343, 95%, 90%)"}
      - { label: "Topics/Epistemics", backgroundColor: "hsl(92, 95%, 90%)"}
      - { label: "Type/YouTube Facts", backgroundColor: "hsl(121, 95%, 90%)"}
      - { label: "Topics/Profitability", backgroundColor: "hsl(348, 95%, 90%)"}
      - { label: "Topics/Business", backgroundColor: "hsl(15, 95%, 90%)"}
      - { label: "Type/Writeup_Snippets", backgroundColor: "hsl(184, 95%, 90%)"}
      - { label: "Topics/World_War_I", backgroundColor: "hsl(281, 95%, 90%)"}
      - { label: "Topics/Class", backgroundColor: "hsl(358, 95%, 90%)"}
      - { label: "Topics/Phage", backgroundColor: "hsl(277, 95%, 90%)"}
      - { label: "Topics/Bacteria", backgroundColor: "hsl(350, 95%, 90%)"}
      - { label: "Topics/Disney", backgroundColor: "hsl(87, 95%, 90%)"}
      - { label: "Skincare", backgroundColor: "hsl(139, 95%, 90%)"}
      - { label: "Topics/Book_Notes", backgroundColor: "hsl(140, 95%, 90%)"}
      - { label: "Topics/Topology", backgroundColor: "hsl(286, 95%, 90%)"}
      - { label: "Topics/Math", backgroundColor: "hsl(352, 95%, 90%)"}
      - { label: "Topics/Unfairness", backgroundColor: "hsl(26, 95%, 90%)"}
      - { label: "Topics/Monkeys", backgroundColor: "hsl(128, 95%, 90%)"}
      - { label: "Topics/Grapes", backgroundColor: "hsl(327, 95%, 90%)"}
      - { label: "Type/Experimental_Study", backgroundColor: "hsl(131, 95%, 90%)"}
      - { label: "Simplicity", backgroundColor: "hsl(66, 95%, 90%)"}
      - { label: "Topics/Simplicity_is_Key", backgroundColor: "hsl(347, 95%, 90%)"}
      - { label: "Inspiration", backgroundColor: "hsl(192, 95%, 90%)"}
      - { label: "Motivation", backgroundColor: "hsl(74, 95%, 90%)"}
      - { label: "Speeches", backgroundColor: "hsl(225, 95%, 90%)"}
      - { label: "Type/Speech", backgroundColor: "hsl(198, 95%, 90%)"}
      - { label: "Topics/Discovery", backgroundColor: "hsl(56, 95%, 90%)"}
      - { label: "Topics/Connotation", backgroundColor: "hsl(359, 95%, 90%)"}
      - { label: "Topics/Negative_Freedom", backgroundColor: "hsl(267, 95%, 90%)"}
      - { label: "Topics/Financial_Freedom", backgroundColor: "hsl(153, 95%, 90%)"}
      - { label: "Topics/Entitlement", backgroundColor: "hsl(18, 95%, 90%)"}
      - { label: "Type/Concept", backgroundColor: "hsl(191, 95%, 90%)"}
      - { label: "Topics/Stimulus", backgroundColor: "hsl(66, 95%, 90%)"}
      - { label: "Topics/Sensory_Overload", backgroundColor: "hsl(70, 95%, 90%)"}
      - { label: "Topics/Morning_Routine", backgroundColor: "hsl(158, 95%, 90%)"}
      - { label: "Topics/Julius_Caesar", backgroundColor: "hsl(215, 95%, 90%)"}
      - { label: "Topics/Credible_Commitment", backgroundColor: "hsl(257, 95%, 90%)"}
      - { label: "Youtube", backgroundColor: "hsl(14, 95%, 90%)"}
      - { label: "Topics/Diminishing_Marginal_Returns", backgroundColor: "hsl(102, 95%, 90%)"}
      - { label: "Topics/Dependency", backgroundColor: "hsl(202, 95%, 90%)"}
      - { label: "Topics/Basketball", backgroundColor: "hsl(141, 95%, 90%)"}
      - { label: "Topics/Siblings", backgroundColor: "hsl(59, 95%, 90%)"}
      - { label: "Topics/Sports", backgroundColor: "hsl(235, 95%, 90%)"}
      - { label: "Topics/Men", backgroundColor: "hsl(348, 95%, 90%)"}
      - { label: "Topics/Feminism", backgroundColor: "hsl(306, 95%, 90%)"}
      - { label: "Topics/Summarize", backgroundColor: "hsl(91, 95%, 90%)"}
      - { label: "Topics/Organization", backgroundColor: "hsl(305, 95%, 90%)"}
      - { label: "Topics/Parenting", backgroundColor: "hsl(357, 95%, 90%)"}
      - { label: "Topics/Optimism", backgroundColor: "hsl(341, 95%, 90%)"}
      - { label: "Topics/Never_Split_the_Difference", backgroundColor: "hsl(179, 95%, 90%)"}
      - { label: "Topics/Python", backgroundColor: "hsl(227, 95%, 90%)"}
      - { label: "Topics/Functions", backgroundColor: "hsl(236, 95%, 90%)"}
      - { label: "Topics/Moments, Topics/Present, Topics/Time, Topics/Stoicism", backgroundColor: "hsl(299, 95%, 90%)"}
      - { label: "Topics/Inspirational", backgroundColor: "hsl(72, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
  categories:
    input: select
    accessor: categories
    key: categories
    label: categories
    position: 100
    options:
      - { label: "Podcast", backgroundColor: "hsl(81, 95%, 90%)"}
      - { label: "Derived", backgroundColor: "hsl(38, 95%, 90%)"}
      - { label: "Article", backgroundColor: "hsl(8, 95%, 90%)"}
      - { label: "Video", backgroundColor: "hsl(84, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
config:
  enable_show_state: true
  group_folder_column: 
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  show_metadata_created: false
  show_metadata_modified: false
  source_data: current_folder
  source_form_result: root
filters:
%%>