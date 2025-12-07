+++
title = "Substituting Games Workshop Scatter & Artillery Dice with a Standard D10"
date = "2023-12-11"
tags = ["games", "dice", "warhammer", "substitution"]
+++

<style>
td {
  white-space: nowrap;
}
</style>

Here’s a system to use a single D10 dice (the kind that “points” a direction when at rest) as substitute for a set of Games Workshop (GW) Scatter & Artillery Dice (the kind used for Warhammer Fantasy 5th Ed.). This system is long-winded, daft and best ignored. If you need to substitute some lost Scatter & Artillery Dice, just use regular D6s.

To begin let us lay out possible results of the two proprietary GW dice, each dice has 6 faces.

### [](https://github.com/bogstandard/nonsense#gw-scatter-dice)GW Scatter Dice

This dice has 6 faces, 4 are arrows which we will refer to as a “Direction” result (4/6 chance) and 2 are “Hit” results (2/6 chance). The Direction results are special in that it is the _physical_ direction in which the arrow is pointing upon resting that is important to the player.

### [](https://github.com/bogstandard/nonsense#gw-artillery-dice)GW Artillery Dice

This dice has 6 faces, 5 are numeric and represent Distance, the values of these are 2, 4, 6, 8 and 10 (5/6 chance). The remaining face is Misfire (1/6 chance).

### [](https://github.com/bogstandard/nonsense#meaningful-results)Meaningful Results

These two dice combine to provide three possible meaningful results: Scatters, Hit and Misfire. Scatters occurs when a Direction and Distance result are gained. Hit occurs when a Hit is gained without Misfire. Misfire occurs when Misfire occurs, cancelling out all other results. These meaninful results are astrixed (\*) in the tables of this document.

### [](https://github.com/bogstandard/nonsense#probabilities)Probabilities

Below is a table which details the possible results of the GW dice and their decimal chance of occurance. The meaningful result of Scatters is equal to _Direction x Distance_, because Scatters depends on both occurring. The meaningful result of Hit is equal to _Organic Hit (2/6) x Distance_, because a Meaningful Hit cannot occur if a misfire occurs, it is not a straight 2/6 chance. _However_ because the original GW Dice are seperate entities, this calculation for Meaningful Hits is ignored and the original 2/6 odds are respected (coming to this conclusion caused me a great deal of anguish but I believe it true).

<figure style="font-size:13px"><table><thead><tr><th><strong>Original GW Dice Probabilities</strong></th><th><strong>Decimal Chance</strong></th><th><strong>On Faces</strong></th><th><strong>Total Faces</strong></th></tr></thead><tbody><tr><td>Direction (SD)</td><td>0.666666666666667</td><td>4</td><td>6</td></tr><tr><td>Distance (AD)</td><td>0.833333333333333</td><td>5</td><td>6</td></tr><tr><td>Scatters (SD &amp; AD)*</td><td>0.555555555555556</td><td>N/A</td><td>N/A</td></tr><tr><td>Hit (SD)*</td><td>0.333333333333333</td><td>2</td><td>6</td></tr><tr><td>Misfire (AD)*</td><td>0.166666666666667</td><td>1</td><td>6</td></tr></tbody></table></figure>

### Substitution Method

The meaningful result of Scatters can almost be accurately replicated using the D10 by requiring an even initial roll result and using the physical direction of the resting D10’s point as the Direction angle. This provides a 0.5 decimal chance of Scatters which is nice but fails to get close enough to 0.555555555555556 and doesn’t consider the other meaningful results. The remedy is to require re-rolls and a switch into Faux D9 on specific outcomes. Using the following flowchart will garner the more pleasing result probabilities tabulated below it.

<pre style="margin-top:32px;margin-right:0px;margin-bottom:32px;margin-left:0px;font-size:10px">                 D10 Rolled  ◄────────────┐
                  │      │                │
                  ▼      ▼                │
        ┌───────Even     Odd ─────┐       │
        │                         ▼       │
        ▼                      Re-Roll    │
     Scatters                  │          │
     given result              ├─►[10]    │
     distance in             R │    ▼     │
     direction D10           E │    Begin │ (make a)
     physically points       S │    Again─┘ (faux D9)
                             U │
(1/2  chance)                L │
(on 1st roll)                T ├─►[1],[2],[3]
(1/2 + (1/2) x 1/10))        S │       ▼
(on subsequent)                │    Misfire  (1/2 x 1/3)
                               │                  = 1/6
                               └─►[4],[5],[6],
                                  [7],[8],[9]
                                       ▼
                                      Hit    (1/2 x 2/3)
                                                  = 1/3
</pre>

The Scatters probability looks very strange after the 1st roll, this is because it has to account for the "Begin Again" arm of the Faux D9, which adds a tiny increase in Scatters chance of occurring if the "Begin Again" arm is reached.

<figure style="margin-top:24px;margin-bottom:24px;font-size:13px"><table><thead><tr><th><strong>D10 into Faux D9 Probabilities</strong></th><th><strong>Decimal Chance</strong></th><th><strong>Decimal Diff From GW</strong></th><th><strong>On Faces</strong></th><th><strong>Total Faces</strong></th></tr></thead><tbody><tr><td>Direction (D10)</td><td>1</td><td>0.333333333333333</td><td>10</td><td>10</td></tr><tr><td>Distance (D10)</td><td>0.55</td><td>-0.283333333333333</td><td>5</td><td>10</td></tr><tr><td>Scatters (D10)*</td><td>0.55</td><td>-0.005555555555556</td><td>N/A</td><td>N/A</td></tr><tr><td>Hit (Faux D9)*</td><td>0.333333333333333</td><td>-0.005555555555556</td><td>6</td><td>9</td></tr><tr><td>Misfire (Faux D9)*</td><td>0.166666666666667</td><td>0</td><td>3</td><td>9</td></tr></tbody></table></figure>

<figure style="font-size:13px"><table><tbody><tr><td><strong>Total Difference</strong></td><td>-0.005555555555556</td></tr></tbody></table></figure>

These probabilties aren't too far off the original GW Scatter & Artillery Dice! It's a bit tricky to compare in tabular format so here's a handy graph of the data.

<pre style="margin-top:32px;margin-right:0px;margin-bottom:32px;margin-left:0px;font-size:10px">  
# Original GW Dice Probabilities
Scatters (SD & AD) ▏ 0.555556 ██████
          Hit (SD) ▏ 0.333333 ███▌
      Misfire (AD) ▏ 0.166667 █▊
      
# D10 into Faux D9 Probabilities
    Scatters (D10) ▏ 0.550000 █████▉
         Hit (FD9) ▏ 0.333333 ███▌
     Misfire (FD9) ▏ 0.166667 █▊
</pre>

This substitution method is wholly ridiculous and should not be used unless you only have a D10 to hand. I also have the begrudging sense that the maths here is completely bunk or flawed, if it is please do enlighten me.

If you do need to substitute GW Scatter & Artillery Dice, and want to do so in a sensible way use 2 D6s: Treat 1 & 6 on your replacement Scatter Dice as "Hit" otherwise the direction of the sideways pointing 1 face is the resulting Direction, then treat 6 on your replacement Artillery Dice as "Misfire" otherwise double the result to gain your Distance (or if you are using metric, multiply by 5).