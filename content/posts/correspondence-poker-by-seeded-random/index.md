+++
title = "Correspondence Poker by Seeded Random"
date = "2024-07-04"
tags = ["games", "poker", "randomness", "correspondence"]
+++

I enjoy [correspondence chess](https://en.wikipedia.org/wiki/Correspondence_chess), [plaintext](https://en.wikipedia.org/wiki/Plaintext) computing, [stateless APIs](https://en.wikipedia.org/wiki/Stateless_protocol) and [Jamstack](https://en.wikipedia.org/wiki/Jamstack), and I also enjoy poker; so a while back I created a means of playing poker by correspondence via linked webpages: [Plaintext-Poker](https://bogstandard.github.io/plaintext-poker/) ([repo](https://github.com/bogstandard/plaintext-poker)).

This utilises a seeded random (actually Java’s Random ported to Javascript!) to ensure that players stay on the same deck and same game state without any memory being used anywhere. It does this in a stateless fashion by using the seed to perform the exact same previous actions for each stage, given the seed via the URL, with a player number, the number of players and the game stage also included.

For instance, if it’s the flop, everyone gets the seed _RANDOMSEED_, then upon opening the link, each player has the deck shuffled, dealt and flopped randomly according to that seed. But only has _their_ cards displayed to them according to their player number, and the amount of cards in the river by the given game stage. Essentially the entire dealer’s game (outside of betting) is predetermined by the seed. In poker the players’ actions have no effect on the dealer’s actions, which is useful.

Imagine Jacob and Toby are playing poker together, but only one person can be in the room at a time. The dealer in this instance is a machine. Jacob enters the room first and is dealt his hand, so the dealer gives him 2 cards face up, deals 2 cards for Toby face down and flops 3 cards. Jacob then leaves the room having seen his hand and the flop.

Toby then enters the room, the dealer conjures a new deck, exactly shuffled into the same sequence as before then deals Jacob 2 cards face down, then deals Toby 2 cards for him to see, then flops 3 cards. Because the deck is exactly shuffled into the same sequence as before the cards are all the same as when Jacob was in the room. They’re playing the same game but with an indefinite time gap.

This correspondence continues until the game is up, with Jacob and Toby passing notes outside of the dealer’s concern as to whether they are betting, checking or folding, but it’s up to them to be honest about their cards. If someone is dishonest, at least in this implementation it’s trivial to edit the URL to discover an opponents cards and discover a cheat.

_I’m hoping soon to create a more friendly interface for the linked proof of concept implementation, if and when I do; I’ll update this post._