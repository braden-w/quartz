---

database-plugin: basic

---
# Fun Facts Database

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
      - { label: "Fun_Facts", backgroundColor: "hsl(78, 95%, 90%)"}
      - { label: "Humans", backgroundColor: "hsl(247, 95%, 90%)"}
      - { label: "Topics/Immune", backgroundColor: "hsl(47, 95%, 90%)"}
      - { label: "Topics/Alergies", backgroundColor: "hsl(218, 95%, 90%)"}
      - { label: "Type/Fun_Facts", backgroundColor: "hsl(266, 95%, 90%)"}
      - { label: "Topics/Fun_Facts", backgroundColor: "hsl(226, 95%, 90%)"}
      - { label: "On/Fun_Facts", backgroundColor: "hsl(187, 95%, 90%)"}
      - { label: "Source/Derived", backgroundColor: "hsl(296, 95%, 90%)"}
      - { label: "On/Immune", backgroundColor: "hsl(120, 95%, 90%)"}
      - { label: "On/Alergies", backgroundColor: "hsl(224, 95%, 90%)"}
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
      - { label: "Deri", backgroundColor: "hsl(166, 95%, 90%)"}
      - { label: "Derived", backgroundColor: "hsl(293, 95%, 90%)"}
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