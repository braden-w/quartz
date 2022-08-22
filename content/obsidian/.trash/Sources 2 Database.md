---

database-plugin: basic

---
# Sources 2 Database

<%%
name: new database
description: new description
columns:
  id:
    input: text
    accessor: id
    label: id
    key: id
    position: 4715
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  file:
    input: text
    accessor: file
    label: file
    key: file
    position: 4716
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  categories:
    input: text
    accessor: categories
    label: categories
    key: categories
    position: 4673
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  date:
    input: text
    accessor: date
    label: date
    key: date
    position: 4717
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  date modified:
    input: text
    accessor: date modified
    label: date modified
    key: date modified
    position: 4718
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  tags:
    input: text
    accessor: tags
    label: tags
    key: tags
    position: 4676
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  title:
    input: text
    accessor: title
    label: title
    key: title
    position: 4719
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  date-modified:
    input: text
    accessor: date-modified
    label: date-modified
    key: date-modified
    position: 4720
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  aliases:
    input: text
    accessor: aliases
    label: aliases
    key: aliases
    position: 4672
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  :
    input: text
    accessor: 
    label: 
    key: 
    position: 228
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  alias:
    input: text
    accessor: alias
    label: alias
    key: alias
    position: 338
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  date created:
    input: text
    accessor: date created
    label: date created
    key: date created
    position: 4412
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  date-created:
    input: text
    accessor: date-created
    label: date-created
    key: date-created
    position: 4415
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  draft:
    input: text
    accessor: draft
    label: draft
    key: draft
    position: 1213
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  aliases::
    input: text
    accessor: aliases:
    label: aliases:
    key: aliases:
    position: 4130
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