---
database-plugin: basic

date: "2022-06-16"
date modified: "2022-06-16"
title: Quotes Database
---

# Quotes Database
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
	position: 1
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
	position: 2
	options:
	  - { label: "Quotes", backgroundColor: "hsl(64, 95%, 90%)"}
	  - { label: "Favorite_Question", backgroundColor: "hsl(19, 95%, 90%)"}
	  - { label: "Writing/Purpose", backgroundColor: "hsl(98, 95%, 90%)"}
	  - { label: "Writing/Stoicism", backgroundColor: "hsl(1, 95%, 90%)"}
	  - { label: "Tactics", backgroundColor: "hsl(162, 95%, 90%)"}
	  - { label: "Strategy", backgroundColor: "hsl(13, 95%, 90%)"}
	  - { label: "War", backgroundColor: "hsl(188, 95%, 90%)"}
	  - { label: "Comments", backgroundColor: "hsl(117, 95%, 90%)"}
	  - { label: "Productivity", backgroundColor: "hsl(194, 95%, 90%)"}
	  - { label: "Philosophy", backgroundColor: "hsl(132, 95%, 90%)"}
	  - { label: "Writing/Failure", backgroundColor: "hsl(240, 95%, 90%)"}
	  - { label: "Type/Quotes", backgroundColor: "hsl(254, 95%, 90%)"}
	  - { label: "Inspirational", backgroundColor: "hsl(183, 95%, 90%)"}
	  - { label: "Optimism", backgroundColor: "hsl(277, 95%, 90%)"}
	  - { label: "Favorite_Question/Life", backgroundColor: "hsl(281, 95%, 90%)"}
	  - { label: "Writing/Interpersonal", backgroundColor: "hsl(146, 95%, 90%)"}
	  - { label: "Writing/Productivity", backgroundColor: "hsl(137, 95%, 90%)"}
	  - { label: "Writing/Belief", backgroundColor: "hsl(248, 95%, 90%)"}
	  - { label: "Type/Facts", backgroundColor: "hsl(94, 95%, 90%)"}
	  - { label: "Type/Book", backgroundColor: "hsl(97, 95%, 90%)"}
	  - { label: "Type/", backgroundColor: "hsl(62, 95%, 90%)"}
	  - { label: "Risks", backgroundColor: "hsl(170, 95%, 90%)"}
	  - { label: "Interpersonal", backgroundColor: "hsl(341, 95%, 90%)"}
	  - { label: "project", backgroundColor: "hsl(167, 95%, 90%)"}
	  - { label: "Ideas", backgroundColor: "hsl(335, 95%, 90%)"}
	  - { label: "Writing/Suffering", backgroundColor: "hsl(2, 95%, 90%)"}
	  - { label: "Advice", backgroundColor: "hsl(205, 95%, 90%)"}
	  - { label: "Type/Takes", backgroundColor: "hsl(104, 95%, 90%)"}
	  - { label: "Type/Advice", backgroundColor: "hsl(242, 95%, 90%)"}
	  - { label: "Type/Reference", backgroundColor: "hsl(82, 95%, 90%)"}
	  - { label: "Pessimism", backgroundColor: "hsl(44, 95%, 90%)"}
	  - { label: "Topics/Pessimism", backgroundColor: "hsl(321, 95%, 90%)"}
	  - { label: "Topics/Optimism", backgroundColor: "hsl(262, 95%, 90%)"}
	  - { label: "Topics/Prioritization", backgroundColor: "hsl(22, 95%, 90%)"}
	  - { label: "Topics/Efficiency", backgroundColor: "hsl(53, 95%, 90%)"}
	  - { label: "Topics/Moderation", backgroundColor: "hsl(3, 95%, 90%)"}
	  - { label: "Topics/Balance", backgroundColor: "hsl(253, 95%, 90%)"}
	  - { label: "Topics/Money'", backgroundColor: "hsl(346, 95%, 90%)"}
	  - { label: "Topics/Inspiration", backgroundColor: "hsl(15, 95%, 90%)"}
	  - { label: "Topics/Growth", backgroundColor: "hsl(282, 95%, 90%)"}
	  - { label: "Topics/Support", backgroundColor: "hsl(334, 95%, 90%)"}
	  - { label: "Topics/Trust", backgroundColor: "hsl(247, 95%, 90%)"}
	  - { label: "Topics/Procecss", backgroundColor: "hsl(351, 95%, 90%)"}
	  - { label: "Topics/Process", backgroundColor: "hsl(92, 95%, 90%)"}
	  - { label: "Type/Parenting", backgroundColor: "hsl(118, 95%, 90%)"}
	  - { label: "Topics/Parenting", backgroundColor: "hsl(291, 95%, 90%)"}
	  - { label: "Topics/Life", backgroundColor: "hsl(49, 95%, 90%)"}
	config:
	  enable_media_view: true
	  media_width: 100
	  media_height: 100
	  isInline: false
  type:
	input: select
	accessor: type
	key: type
	label: type
	position: 100
	options:
	config:
	  enable_media_view: true
	  media_width: 100
	  media_height: 100
	  isInline: false
	  source_data: current_folder
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
