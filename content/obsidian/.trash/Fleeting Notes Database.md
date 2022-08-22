---
database-plugin: basic

date: "2022-06-15"
date modified: "2022-06-16"
title: Fleeting Notes Database
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
	  - { label: "Type/Writeup_Snippets/Posts", backgroundColor: "hsl(30, 95%, 90%)"}
	  - { label: "team-special-projects", backgroundColor: "hsl(247, 95%, 90%)"}
	  - { label: "summer-incubator,summer-incubator", backgroundColor: "hsl(176, 95%, 90%)"}
	  - { label: "Type/Calls", backgroundColor: "hsl(124, 95%, 90%)"}
	  - { label: "Type/Book", backgroundColor: "hsl(166, 95%, 90%)"}
	  - { label: "Type/Facts", backgroundColor: "hsl(131, 95%, 90%)"}
	  - { label: "Type/Takes", backgroundColor: "hsl(171, 95%, 90%)"}
	  - { label: "Type/Quotes", backgroundColor: "hsl(323, 95%, 90%)"}
	  - { label: "Joke", backgroundColor: "hsl(153, 95%, 90%)"}
	  - { label: "Type/YouTube_Notes", backgroundColor: "hsl(87, 95%, 90%)"}
	  - { label: "Quotes", backgroundColor: "hsl(358, 95%, 90%)"}
	  - { label: "Type/Facts,Type/Facts,Type/Quotes,Type/Book,Type/", backgroundColor: "hsl(80, 95%, 90%)"}
	  - { label: "Type/Examples", backgroundColor: "hsl(104, 95%, 90%)"}
	  - { label: "Type/Advice", backgroundColor: "hsl(126, 95%, 90%)"}
	  - { label: "AI", backgroundColor: "hsl(105, 95%, 90%)"}
	  - { label: "Hot_Takes", backgroundColor: "hsl(56, 95%, 90%)"}
	  - { label: "Type/Book,Hot_Takes", backgroundColor: "hsl(228, 95%, 90%)"}
	  - { label: "Software_Engineering,Coding,Source/Talks", backgroundColor: "hsl(147, 95%, 90%)"}
	  - { label: "Software_Engineering,Hot_Takes", backgroundColor: "hsl(161, 95%, 90%)"}
	  - { label: "Concepts,Software_Engineering", backgroundColor: "hsl(277, 95%, 90%)"}
	  - { label: "Quotes,Tactics,Strategy,War", backgroundColor: "hsl(120, 95%, 90%)"}
	  - { label: "Software_Engineering,Concepts", backgroundColor: "hsl(212, 95%, 90%)"}
	  - { label: "Simplicity", backgroundColor: "hsl(179, 95%, 90%)"}
	  - { label: "Software_Engineering", backgroundColor: "hsl(9, 95%, 90%)"}
	  - { label: "Software_Engineering,Advice", backgroundColor: "hsl(136, 95%, 90%)"}
	  - { label: "Software_Engineering,Examples", backgroundColor: "hsl(50, 95%, 90%)"}
	  - { label: "Software_Engineering,Advice,Coding", backgroundColor: "hsl(271, 95%, 90%)"}
	  - { label: "Advice,Software_Engineering,Comparisons", backgroundColor: "hsl(264, 95%, 90%)"}
	  - { label: "Youtube_Notes", backgroundColor: "hsl(62, 95%, 90%)"}
	  - { label: "Hot_Takes,Effective_Altruism,Clubs,Organization", backgroundColor: "hsl(318, 95%, 90%)"}
	  - { label: "Coding,Concepts", backgroundColor: "hsl(146, 95%, 90%)"}
	  - { label: "Cheating,Students", backgroundColor: "hsl(296, 95%, 90%)"}
	  - { label: "Hot_Takes,Empathy", backgroundColor: "hsl(83, 95%, 90%)"}
	  - { label: "Fun_Facts", backgroundColor: "hsl(159, 95%, 90%)"}
	  - { label: "Advice,Reaching_Out,Hot_Takes,Writing/Interpersonal", backgroundColor: "hsl(246, 95%, 90%)"}
	  - { label: "India,Testing,Students", backgroundColor: "hsl(167, 95%, 90%)"}
	  - { label: "Youtube_Notes,Class,University,Hot_Takes", backgroundColor: "hsl(28, 95%, 90%)"}
	  - { label: "Advice,Software_Engineering,Progress", backgroundColor: "hsl(44, 95%, 90%)"}
	  - { label: "Hot_Takes,Type/Book", backgroundColor: "hsl(334, 95%, 90%)"}
	  - { label: "Skincare,Advice", backgroundColor: "hsl(217, 95%, 90%)"}
	  - { label: "Hardware,Advice,Duality", backgroundColor: "hsl(352, 95%, 90%)"}
	  - { label: "Type/Writeup_Snippets,Effective_Altruism,Stories", backgroundColor: "hsl(351, 95%, 90%)"}
	  - { label: "summer-incubator", backgroundColor: "hsl(203, 95%, 90%)"}
	  - { label: "Type/", backgroundColor: "hsl(342, 95%, 90%)"}
	  - { label: "Coding", backgroundColor: "hsl(151, 95%, 90%)"}
	  - { label: "Source/Talks", backgroundColor: "hsl(119, 95%, 90%)"}
	  - { label: "Concepts", backgroundColor: "hsl(291, 95%, 90%)"}
	  - { label: "Tactics", backgroundColor: "hsl(309, 95%, 90%)"}
	  - { label: "Strategy", backgroundColor: "hsl(309, 95%, 90%)"}
	  - { label: "War", backgroundColor: "hsl(319, 95%, 90%)"}
	  - { label: "Advice", backgroundColor: "hsl(43, 95%, 90%)"}
	  - { label: "Examples", backgroundColor: "hsl(313, 95%, 90%)"}
	  - { label: "Comparisons", backgroundColor: "hsl(16, 95%, 90%)"}
	  - { label: "Effective_Altruism", backgroundColor: "hsl(215, 95%, 90%)"}
	  - { label: "Clubs", backgroundColor: "hsl(163, 95%, 90%)"}
	  - { label: "Organization", backgroundColor: "hsl(350, 95%, 90%)"}
	  - { label: "Cheating", backgroundColor: "hsl(282, 95%, 90%)"}
	  - { label: "Students", backgroundColor: "hsl(272, 95%, 90%)"}
	  - { label: "Empathy", backgroundColor: "hsl(210, 95%, 90%)"}
	  - { label: "Reaching_Out", backgroundColor: "hsl(138, 95%, 90%)"}
	  - { label: "Writing/Interpersonal", backgroundColor: "hsl(29, 95%, 90%)"}
	  - { label: "India", backgroundColor: "hsl(34, 95%, 90%)"}
	  - { label: "Testing", backgroundColor: "hsl(143, 95%, 90%)"}
	  - { label: "Class", backgroundColor: "hsl(282, 95%, 90%)"}
	  - { label: "University", backgroundColor: "hsl(34, 95%, 90%)"}
	  - { label: "Progress", backgroundColor: "hsl(326, 95%, 90%)"}
	  - { label: "Skincare", backgroundColor: "hsl(243, 95%, 90%)"}
	  - { label: "Hardware", backgroundColor: "hsl(212, 95%, 90%)"}
	  - { label: "Duality", backgroundColor: "hsl(324, 95%, 90%)"}
	  - { label: "Type/Writeup_Snippets", backgroundColor: "hsl(344, 95%, 90%)"}
	  - { label: "Stories", backgroundColor: "hsl(200, 95%, 90%)"}
	  - { label: "Speeches", backgroundColor: "hsl(323, 95%, 90%)"}
	  - { label: "Inspiration", backgroundColor: "hsl(162, 95%, 90%)"}
	  - { label: "Motivation", backgroundColor: "hsl(30, 95%, 90%)"}
	  - { label: "Type/Speech", backgroundColor: "hsl(12, 95%, 90%)"}
	  - { label: "Inspirational", backgroundColor: "hsl(118, 95%, 90%)"}
	  - { label: "Optimism", backgroundColor: "hsl(302, 95%, 90%)"}
	  - { label: "Risks", backgroundColor: "hsl(23, 95%, 90%)"}
	  - { label: "Interpersonal", backgroundColor: "hsl(70, 95%, 90%)"}
	  - { label: "Topics/Pessimism", backgroundColor: "hsl(278, 95%, 90%)"}
	  - { label: "Topics/Optimism", backgroundColor: "hsl(274, 95%, 90%)"}
	  - { label: "Topics/Money'", backgroundColor: "hsl(71, 95%, 90%)"}
	  - { label: "Topics/Moderation", backgroundColor: "hsl(334, 95%, 90%)"}
	  - { label: "Topics/Balance", backgroundColor: "hsl(305, 95%, 90%)"}
	  - { label: "Topics/Inspiration", backgroundColor: "hsl(216, 95%, 90%)"}
	  - { label: "Topics/Growth", backgroundColor: "hsl(289, 95%, 90%)"}
	  - { label: "Topics/Support", backgroundColor: "hsl(321, 95%, 90%)"}
	  - { label: "Favorite_Question", backgroundColor: "hsl(332, 95%, 90%)"}
	  - { label: "Writing/Purpose", backgroundColor: "hsl(186, 95%, 90%)"}
	  - { label: "Topics/Prioritization", backgroundColor: "hsl(2, 95%, 90%)"}
	  - { label: "Topics/Efficiency", backgroundColor: "hsl(104, 95%, 90%)"}
	  - { label: "Topics/Trust", backgroundColor: "hsl(50, 95%, 90%)"}
	  - { label: "Topics/Process", backgroundColor: "hsl(95, 95%, 90%)"}
	  - { label: "Writing/Stoicism", backgroundColor: "hsl(237, 95%, 90%)"}
	  - { label: "Comments", backgroundColor: "hsl(29, 95%, 90%)"}
	  - { label: "Productivity", backgroundColor: "hsl(131, 95%, 90%)"}
	  - { label: "Philosophy", backgroundColor: "hsl(19, 95%, 90%)"}
	  - { label: "Topics/Parenting", backgroundColor: "hsl(282, 95%, 90%)"}
	  - { label: "Topics/Life", backgroundColor: "hsl(1, 95%, 90%)"}
	  - { label: "Writing/Failure", backgroundColor: "hsl(289, 95%, 90%)"}
	  - { label: "Favorite_Question/Life", backgroundColor: "hsl(122, 95%, 90%)"}
	  - { label: "Writing/Productivity", backgroundColor: "hsl(208, 95%, 90%)"}
	  - { label: "Writing/Belief", backgroundColor: "hsl(171, 95%, 90%)"}
	  - { label: "Type/Reference", backgroundColor: "hsl(314, 95%, 90%)"}
	  - { label: "project", backgroundColor: "hsl(147, 95%, 90%)"}
	  - { label: "Ideas", backgroundColor: "hsl(231, 95%, 90%)"}
	  - { label: "Writing/Suffering", backgroundColor: "hsl(181, 95%, 90%)"}
	  - { label: "Type/Podcast", backgroundColor: "hsl(251, 95%, 90%)"}
	  - { label: "Type/Stories", backgroundColor: "hsl(173, 95%, 90%)"}
	  - { label: "Type/YouTube Notes", backgroundColor: "hsl(342, 95%, 90%)"}
	  - { label: "Topics/Software_Engineering", backgroundColor: "hsl(254, 95%, 90%)"}
	  - { label: "Topic/Generalist", backgroundColor: "hsl(83, 95%, 90%)"}
	  - { label: "Topic/Specialist", backgroundColor: "hsl(36, 95%, 90%)"}
	  - { label: "Type/Meeting/Calls", backgroundColor: "hsl(175, 95%, 90%)"}
	  - { label: "Type/Hot_Takes", backgroundColor: "hsl(308, 95%, 90%)"}
	  - { label: "Topics/Summarize", backgroundColor: "hsl(261, 95%, 90%)"}
	  - { label: "Topics/Organization", backgroundColor: "hsl(168, 95%, 90%)"}
	  - { label: "Topics/Writing", backgroundColor: "hsl(268, 95%, 90%)"}
	config:
	  enable_media_view: true
	  media_width: 100
	  media_height: 100
	  isInline: false
config:
  enable_show_state: false
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
