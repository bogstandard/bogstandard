+++
title = "Making Mount & Blade: Warband, Halal"
date = "2024-03-17"
tags = ["games", "modding", "mount-and-blade", "culture"]
+++

It’s always irked me somewhat that the townships of the [Sarranid Sultanate](https://mountandblade.fandom.com/wiki/Sarranid_Sultanate) in Mount & Blade: Warband carry pork products. The faction is obviously very Islamic themed, minarets are visible & their banner features a crescent moon. So, despite M&B never explicitly mentioning religion, such an Islamic themed faction should not be anywhere near pork.

But, this glaring anatopism is fixable with some very light-touch modding.

<!-- More -->

By editing the _item\_kinds1.txt_ within the games _Modules_ folder, we can find the item definitions for _itm\_pork_ & __itm\_sausages__.

     itm_pork Pork Pork 1  pork 0  ...<snip>
     0
    0
    
     itm_sausages Sausages Sausages 1  ...<snip>
     0
    0

The 2nd lines of these definitions denotes the number of factions that carry them, if it’s zero, all factions carry the items. If we amend these to something greater than zero, then a new line below is needed to denote which factions carry the item. We can use the following list for reference;

_1 – Commoners ( Mercs & Farmers, etc), 3 – Neutral (_peaceful__ _parties), 15 – Swadia, 16 – Vaegirs, 17 – Khergit Khanate, 18 – Nords, 19 – Rhodoks, 20 – Sarranid Sultanate_

And so it goes that the definitions become the following if we want to exclude our Sultanate;

     itm_pork Pork Pork 1  pork 0  ...<snip>
     7
     1 3 15 16 17 18 19
    0
    
     itm_sausages Sausages Sausages 1  ...<snip>
     7
     1 3 15 16 17 18 19
    0

With these changes, only Sarranid townships recently liberated from another faction will stock pork products, since the game restocks shops on a delayed timer. It’s a small fix, but a fun one.