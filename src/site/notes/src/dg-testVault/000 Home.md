---
{"dg-publish":true,"permalink":"/src/dg-test-vault/000-home/","tags":["gardenEntry"]}
---

## Welcome

Welcome to the digital garden testing vault! 

This vault is part of the `obsidian-digital-garden` repository, and meant to act as a staging area for 

1. providing a maintainable testing ground for the digital garden features
2. documenting features in action 

Hopefully in the future it can be part of automated testing too! Say, snapshot testing the output from this garden would actually be relatively easy! :) 

> [!info] See README for instructions on adding info to .env for testing


## Snapshot tests

This test vault enables snapshot testing of the garden compilation! To generate the snapshot: 

- run `Generate Garden Snapshot` from the command palette
- Snapshot generation is also run on plugin load. 


## Plugins 

This garden should have the following plugins 

- [x] [[src/dg-testVault/P Plugins/PE Excalidraw/PE1 Transcluded excalidraw\|PE1 Transcluded excalidraw]]
- [x] [[src/dg-testVault/P Plugins/PD Dataview/PD1 Dataview\|PD1 Dataview]]
- [x] hot reload (reloads obsidian dev plugins on changes)