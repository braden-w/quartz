---

database-plugin: basic

---
# Meetings Database

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
      - { label: "Daily_Note/Moments", backgroundColor: "hsl(233, 95%, 90%)"}
      - { label: "Topics/Climate_Change", backgroundColor: "hsl(1, 95%, 90%)"}
      - { label: "Type/Meetings", backgroundColor: "hsl(255, 95%, 90%)"}
      - { label: "Topics/Effective_Altruism", backgroundColor: "hsl(76, 95%, 90%)"}
      - { label: "Type/Lunch", backgroundColor: "hsl(232, 95%, 90%)"}
      - { label: "Daily_Note/Memories/High", backgroundColor: "hsl(29, 95%, 90%)"}
      - { label: "Daily_Note/Calls/Oh_Shit", backgroundColor: "hsl(39, 95%, 90%)"}
      - { label: "Topics/Philosophy", backgroundColor: "hsl(111, 95%, 90%)"}
      - { label: "Type/Derived", backgroundColor: "hsl(42, 95%, 90%)"}
      - { label: "Daily_Note/Meals/High", backgroundColor: "hsl(61, 95%, 90%)"}
      - { label: "Artificial_Intelligence", backgroundColor: "hsl(145, 95%, 90%)"}
      - { label: "Entrepreneurship", backgroundColor: "hsl(340, 95%, 90%)"}
      - { label: "Add_Ideas", backgroundColor: "hsl(347, 95%, 90%)"}
      - { label: "App_Ideas", backgroundColor: "hsl(123, 95%, 90%)"}
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
    position: 100
    options:
      - { label: "Meetings", backgroundColor: "hsl(282, 95%, 90%)"}
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