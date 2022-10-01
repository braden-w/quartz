---

database-plugin: basic

---
# Material

%% dbfolder:yaml
name: new database
description: new description
columns:
  __file__:
    key: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
  tags:
    input: tags
    key: tags
    accessorKey: tags
    label: tags
    position: 0
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Salient", backgroundColor: "hsl(284, 95%, 90%)"}
      - { label: "null", backgroundColor: "hsl(46, 95%, 90%)"}
      - { label: "On/Growth", backgroundColor: "hsl(17, 95%, 90%)"}
      - { label: "On/Preparedness", backgroundColor: "hsl(135, 95%, 90%)"}
      - { label: "Type/Quote/Derived", backgroundColor: "hsl(152, 95%, 90%)"}
      - { label: "On/Philosophy", backgroundColor: "hsl(311, 95%, 90%)"}
      - { label: "On/Knowledge", backgroundColor: "hsl(234, 95%, 90%)"}
      - { label: "On/Debate", backgroundColor: "hsl(229, 95%, 90%)"}
      - { label: "Type/Source/Talks", backgroundColor: "hsl(176, 95%, 90%)"}
      - { label: "On/Animals", backgroundColor: "hsl(181, 95%, 90%)"}
      - { label: "On/Effective_Altruim", backgroundColor: "hsl(268, 95%, 90%)"}
      - { label: "Type/Source/Lecture", backgroundColor: "hsl(219, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  source_data: query
  source_form_result: root
  source_destination_path: /
  frontmatter_quote_wrap: false
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  formula_folder_path: /
  inline_default: false
  inline_new_position: top
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
filters:
  enabled: false
  conditions:
%%