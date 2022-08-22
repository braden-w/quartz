---

database-plugin: basic

---
# Notes with Multiple Types

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
      - { label: "Type/Advice", backgroundColor: "hsl(13, 95%, 90%)"}
      - { label: "Type/Quotes", backgroundColor: "hsl(216, 95%, 90%)"}
      - { label: "Topics/Effective_Altruism", backgroundColor: "hsl(301, 95%, 90%)"}
      - { label: "Topics/Diversity", backgroundColor: "hsl(212, 95%, 90%)"}
      - { label: "Type/Writeup_Snippets/Post", backgroundColor: "hsl(345, 95%, 90%)"}
      - { label: "Type/Writeup_Snippets/Slack", backgroundColor: "hsl(235, 95%, 90%)"}
      - { label: "Type/Facts", backgroundColor: "hsl(286, 95%, 90%)"}
      - { label: "Topics/Sleep", backgroundColor: "hsl(109, 95%, 90%)"}
      - { label: "Topics/Recovery", backgroundColor: "hsl(11, 95%, 90%)"}
      - { label: "Topics/Generations", backgroundColor: "hsl(238, 95%, 90%)"}
      - { label: "Type/Reference", backgroundColor: "hsl(264, 95%, 90%)"}
      - { label: "Type/Duality", backgroundColor: "hsl(96, 95%, 90%)"}
      - { label: "Type/Article", backgroundColor: "hsl(217, 95%, 90%)"}
      - { label: "Topics/Creativity", backgroundColor: "hsl(67, 95%, 90%)"}
      - { label: "Type/Fun_Facts", backgroundColor: "hsl(221, 95%, 90%)"}
      - { label: "Philosophy", backgroundColor: "hsl(85, 95%, 90%)"}
      - { label: "Topics/Life", backgroundColor: "hsl(289, 95%, 90%)"}
      - { label: "Topics/Parenting", backgroundColor: "hsl(353, 95%, 90%)"}
      - { label: "Topics/Efficiency", backgroundColor: "hsl(262, 95%, 90%)"}
      - { label: "Topics/Effectiveness", backgroundColor: "hsl(104, 95%, 90%)"}
      - { label: "Topics/Productivity", backgroundColor: "hsl(37, 95%, 90%)"}
      - { label: "Type/Takes", backgroundColor: "hsl(150, 95%, 90%)"}
      - { label: "Topics/Fighter_Jet", backgroundColor: "hsl(108, 95%, 90%)"}
      - { label: "Type/Personal_Opinion", backgroundColor: "hsl(232, 95%, 90%)"}
      - { label: "Inspirational", backgroundColor: "hsl(145, 95%, 90%)"}
      - { label: "Optimism", backgroundColor: "hsl(252, 95%, 90%)"}
      - { label: "Topics/Religion", backgroundColor: "hsl(303, 95%, 90%)"}
      - { label: "Type/Concepts", backgroundColor: "hsl(269, 95%, 90%)"}
      - { label: "Topics/Leadership", backgroundColor: "hsl(1, 95%, 90%)"}
      - { label: "Topics/Management", backgroundColor: "hsl(14, 95%, 90%)"}
      - { label: "Topics/Entitlement", backgroundColor: "hsl(347, 95%, 90%)"}
      - { label: "Topics/Accountability", backgroundColor: "hsl(5, 95%, 90%)"}
      - { label: "Type/Hot_Takes", backgroundColor: "hsl(325, 95%, 90%)"}
      - { label: "Topics/Optimism", backgroundColor: "hsl(301, 95%, 90%)"}
      - { label: "Topics/Interpersonal", backgroundColor: "hsl(325, 95%, 90%)"}
      - { label: "Topics/Disappointment", backgroundColor: "hsl(206, 95%, 90%)"}
      - { label: "Topics/Strategy", backgroundColor: "hsl(235, 95%, 90%)"}
      - { label: "Topics/Communication", backgroundColor: "hsl(247, 95%, 90%)"}
      - { label: "Topics/Surveillance", backgroundColor: "hsl(276, 95%, 90%)"}
      - { label: "Topics/Stalking", backgroundColor: "hsl(80, 95%, 90%)"}
      - { label: "Type/Youtube_Notes", backgroundColor: "hsl(106, 95%, 90%)"}
      - { label: "Risks", backgroundColor: "hsl(81, 95%, 90%)"}
      - { label: "Topics/Language", backgroundColor: "hsl(273, 95%, 90%)"}
      - { label: "Topics/Power", backgroundColor: "hsl(123, 95%, 90%)"}
      - { label: "Interpersonal", backgroundColor: "hsl(185, 95%, 90%)"}
      - { label: "Topics/Machine_Learning", backgroundColor: "hsl(255, 95%, 90%)"}
      - { label: "Topics/Careers", backgroundColor: "hsl(259, 95%, 90%)"}
      - { label: "Topics/Failure", backgroundColor: "hsl(264, 95%, 90%)"}
      - { label: "Topics/Success", backgroundColor: "hsl(251, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
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