---

database-plugin: basic

---
# Permanent Notes Database

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
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
  source:
    input: select
    accessor: source
    key: source
    label: source
    position: 4
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