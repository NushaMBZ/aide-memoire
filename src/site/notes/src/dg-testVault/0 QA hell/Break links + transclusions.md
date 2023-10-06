---
{"dg-publish":true,"permalink":"/src/dg-test-vault/0-qa-hell/break-links-transclusions/"}
---

Link with whitespace after link part: 
[[Empty file \| hehe this one breaks for real]]

Whitespace and bar in name: 

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

$<div class="markdown-embed-title">

# whitespace.

</div>




</div></div>


Random hashes in transclusion title: 

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

$<div class="markdown-embed-title">

## ## i think i fixed this one ## earlier #lol

</div>




</div></div>


This is a header ref which doesn't exist: 

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





This is above the header
## Header

This should be in this header block

## Another header

This shouldn't be under a header transclusion



Cheese 

</div></div>



This is a header transclusion that is slightly wrong in a way that obsidian fixes it but DG doesn't #known-issue


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





This is above the header
## Header

This should be in this header block

## Another header

This shouldn't be under a header transclusion



Cheese 

</div></div>


