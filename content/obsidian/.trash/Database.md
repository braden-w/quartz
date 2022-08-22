---
database-plugin: basic

date: "2022-06-10"
date modified: "2022-06-16"
title: Database
---

# Database
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
	isSorted: true
	isSortedDesc: false
	options:
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
