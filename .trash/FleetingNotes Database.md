---

database-plugin: basic

---
# FleetingNotes Database

<%%
name: Fleeting Notes
description: All fleeting notes
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
  Column_1:
    input: text
    key: Column_1
    accessor: Column_1
    label: Column 1
    position: 0
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
config:
  enable_show_state: false
  group_folder_column: 
  remove_field_when_delete_column: false
  cell_size: compact
  sticky_first_column: false
  show_metadata_created: false
  show_metadata_modified: false
  source_data: current_folder
  source_form_result: Type/Meals
filters:
%%>