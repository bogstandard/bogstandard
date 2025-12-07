+++
title = "Supposed Notation/Shorthand for Fencing Plays"
date = "2024-07-02"
tags = ["fencing", "notation", "history", "sports"]
+++

There is not as far as I’m aware a common, system agnostic, simple textual notation for fencing; moves that can be written without advanced ligatures or illustrations. There’s a pretty extensive history of written notation for dance, which in terms of motion is fairly close to fencing, but none besides [Labanotation](https://en.wikipedia.org/wiki/Labanotation) (which is used by the US for the copyright of dance) have significantly caught on and endured in history. Dance/Movement notation is a relatively niche field and jam-packed with advanced symbols and flexible geometry. Without resorting to clunky spoken language, it’s tough to describe a sequence of bodily movements quickly, casually and succinctly in non-graphical form.

<!-- More -->

<style>
    pre {
        white-space: pre;
        overflow: auto;
    }
</style>

(**Heads-up,** The example blocks of this post may render the character spacing incorrectly on some mobile devices! This will cause them to not make much sense. Best to read this on a proper computer instead.)

[Algebraic chess notation](https://en.wikipedia.org/wiki/Algebraic_notation_(chess)) does not suffer this problem, its simplicity and ease of grasp lends itself to trivial interpretation by humans and machines alike. Similar to the syntax Markdown, which is also comprised of common symbols that can be understood without advanced formatting or graphical interpretation. Chess of course plays by a rigid synchronous ruleset and is magnitudes more simple in movement than asynchronous human dance or fencing, making for the ability to notate chess play in such a clean and concise manner not a problem. It’s a bit more difficult when it’s two or more people swinging steel about or performing an elaborate dance.

An issue dance faces is that its detailed movements cannot be truncated, every placement of every limb is important, the position of the dancers in the space must be exact and correctly relative to their partners – so the notation becomes convoluted and busy or painfully abstract. It cannot be boiled down to a parallel of chess notation without losing required information. But can the same be said for fencing? Is the footwork in a fight _required_ information to the casual reader?, perhaps in a stage choreography; yes – but in a common bout – maybe not? (Choreographers tend to use Dance notation precisely because the minutia is important.)

On the opinionated assumption that the finer details like footwork _are not_ important to the record, a fencing bout could be reduced to; _Strikes, Blocks, Hits, Misses, Directions, Positions and Player_s. This _should_ be simple enough for recording a few plays in basic text similar to chess notation. However there’s still the problem of asynchronicity.

Chess is synchronous, strictly one player moves after the other with one turn each, but fencing is asynchronous, both players may move almost unlimitedly at the same time. In left-to-right written text the former could be represented with +/-/+/- while the latter would require the tokens to occupy the same interval; with something like ⩲⩲.

With this in mind, and supposing we use an imagined simplistic key:  
\[`#` serve block or guard\] \[`↖↑↗←→↙↓↘` deliver directional cuts\] \[**`·`** deliver thrust\] \[`*` receive hit\] we could chart a simple play on two parallel tracks, one for each player (assuming two players only!);

    ↘↙#*
    ##↑·

The above describing the following play; _White cuts down-right, Black blocks. White cuts down-left, Black blocks. Black returns with a middle-upwards cut, White blocks. Black delivers a thrust, White receives the hit._

Though this loses information about positioning and any misses, engagements, blunders etc, it’s still surprisingly informative for 8 characters. If you’re casually recounting a play to someone you probably don’t need too-much more.

The two parallel track layout might be upsetting to some people, so alternatively we could try to break it into paired tuples: `↘# ↙# #→ ***·**` However, this becomes a bit confusing to read; the hit is read before the thrust which delivered it. We also lose the ability to denote one player performing more than one action in the time their opponent may do fewer or no actions at all. This is not a problem with two tracks:

    ↘↙→←#*
    ##  ↑·

_After having his first two cuts blocked, _in__ _frustration_ __and_ panic_ _White swings right and left against air while Black waits back to strike._

With two parallel tracks being the best layout so far, we can look to expand the key. If White is frustrated and panicked and Black is biding his time for the perfect strike, how could we denote that? We can lift the following from algebraic chess: (I’ve marked the ones we’re using in our example below)

    Symbol		Meaning

    !!		A brilliant—and usually surprising—move. *
    !		A very good move.
    !?		An interesting move that may not be the best.
    ?!		A dubious move that is not easily refutable. *
    ?		A bad move; a mistake.
    ??		A blunder. *
    ⌓		A better move than the one played.
    □		A forced move. *
    tn		A theoretical novelty.

So our play with commentary now becomes either one of the following pairs of tracks. I prefer the former, keeping the commentary notation inline seems to read better to humans in printed text but oddly enough, when handwritten, the latter writes easier and reads more naturally:

    ↘↙→?!←??#□*
    ##      ↑ ·!!



    ?!??□
    ↘↙→ ← #*
    ##    ↑·
        !!

![](hand-written.jpeg)

Positioning is something we haven’t touched on properly yet, I’m at a loss as to how to denote this in pure textual form without reaching for something like a coordinate system or borrowing chess’ ranks and files, forcing the reader to visualise a movement flow and further lumbering our increasingly busy syntax. I’ll leave this as an exercise for the reader, or myself some other time.

Positioning lazily ignored, further commentary notation can be borrowed from chess and simplified to exploit our parallel track system;

    Original chess notation:

    =	        Both players have equal chances.
    +/= or ⩲	White has a slight plus.
    =/+ or ⩱	Black has a slight plus.
    +/− or ±	White has a clear plus.
    −/+ or ∓	Black has a clear plus.
    +−	        White has a winning advantage.
    −+	        Black has a winning advantage.
    ∞	        It is unclear either side has an advantage; a "toss-up".


    Simplified to exploit parallel track system:

    =	        Both players have equal chances.
    +=	        Player whose track occupied has a slight plus.
    +	        Player whose track occupied has a clear plus.
    ++	        Player whose track occupied has a winning advantage.
    ∞	        It is unclear either side has an advantage; a "toss-up".

And add some more of our own;

    ⚑ or F denotes a foul

With these new notations we can further expand our previous play and describe a following play where White commits a foul out of frustration (thrusting before both ready, perhaps?) and sinks deeper into loss:

    = ↘↙→?!←??#□*
    = ##      ↑ · +


    ·?!⚑
    += *   ++

I’m quite happy with this rather simplistic system, despite its very glaring flaws and lack of detail; it makes for a very quick and concise method of recording the basics of what happened in a casual way. For instance the above two plays could be said from Black’s view as; _“He tried to strike me downwards from the left, then the right, then panicked as I caught them both, until I got him with the one-two! Then after reset he fouled me before the whistle had gone in the next bout.”_

Another perk of this being completely plaintext is it’s transportable, you could text this to someone or write it out by hand. However, there are considerable drawbacks to this notation; you cannot reliably reenact a play recorded in this fashion, you cannot know the positioning of the players, you cannot know the true weapon placement. There’s a tremendous amount of information lost.

These drawbacks are fine in my view, the notation is meant for casually recounting plays, not detailed insight. However, if more details are wanted, such as; which side was the guard?, was the guard high or low?, more annotations could be used to convey this: Perhaps using ^ to denote high, | to denote middle & \_ for low, and the position on which this appears next to the guard character (#) to denote the side relative to the player. This muddies the notation, but some might find it useful, for me it’s too much:

                -
    = ↘  ↙→?!←??#□*
    = #^^#      ↑ · +

I’ll be experimenting with recording the more interesting plays me and my friends have and update this post or create a new one in time. After discussing this exercise with a friend, I found emphasising that this is not for recital usage, but rather for quick casual reporting of plays to be the sticky issue. An issue I’m not sure how to hurdle.

Before casting judgement on this notation; imagine it in its own tiny box next to the chess notation in the daily newspaper, reporting on an interesting play with a tiny bit of commentary to the side. That ultimately is the aim here. Now as it expands and adjusts to refinements, it just needs a name.

With all this in mind, the resulting key for this style of notation/shorthand would be;

    Symbol		Meaning

    ↖↑↗←→↙↓↘	A directional cut.
    ·		A thrust.
    #		A successful block.
    *		A received hit.
    ⚑ or F		A foul.
    ^		A remark of high.
    |		A remark of middle.
    _		A remark of low.
    !!		A brilliant—and usually surprising—move.
    !		A very good move.
    !?		An interesting move that may not be the best.
    ?!		A dubious move that is not easily refutable.
    ?		A bad move; a mistake.
    ??		A blunder.
    ⌓		A better move than the one played.
    □		A forced move.
    tn		A theoretical novelty.
    =	        Both players have equal chances.
    +=	        Player whose track occupied has a slight plus.
    +	        Player whose track occupied has a clear plus.
    ++	        Player whose track occupied has a winning advantage.
    ∞	        It is unclear either side has an advantage; a "toss-up".
