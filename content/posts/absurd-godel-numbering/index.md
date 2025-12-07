+++
title = "Absurd Gödel Numbering"
date = "2023-12-12"
tags = ["math", "godel", "primes", "number-theory"]
+++

Let’s take [Gödel Numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering) and make it ridiculous by attempting to create a single character numbering system.

The Fundamental Theorem of Arithmetic states that every natural number greater than 1 can be written as a product of prime numbers, and that up to rearrangement of the factors, this product is unique.

Here we go one step further and perform the same trick on the exponents, so it’s primes all the way down (or up) while also denoting zeroes and doing the same for them too. It’s a little tricky to explain.

<style>
td {
  white-space: nowrap;
}
</style>

## ?.

First we need our Prime numbers and their positions.

<figure style="font-size:13px"><table><thead><tr><th>Prime</th><th>2</th><th>3</th><th>5</th><th>7</th><th>11</th><th>13</th><th>17</th><th>...</th></tr></thead><tbody><tr><td>Position</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>...</td></tr></tbody></table></figure>

## A.

Then we denote these positions using a padded symbol, eg,

    2  = position 1 = A
    3  = position 2 = 0A
    5  = position 3 = 00A
    7  = position 4 = 000A
    11 = position 5 = 0000A
    etc.

<figure style="font-size:13px"><table><thead><tr><th>Prime</th><th>2</th><th>3</th><th>5</th><th>7</th><th>11</th><th>13</th><th>17</th><th>...</th></tr></thead><tbody><tr><td>Position</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>...</td></tr><tr><td>Padded Symbol Pos.</td><td>A</td><td>0A</td><td>00A</td><td>000A</td><td>0000A</td><td>00000A</td><td>000000A</td><td>...</td></tr></tbody></table></figure>

## <sub>?</sub>A.

That’s an irritating amount of leading zeros, lets truncate those below the line, eg, 11 = 0000A = 4A

<figure style="font-size:13px"><table><thead><tr><th>Prime</th><th>2</th><th>3</th><th>5</th><th>7</th><th>11</th><th>13</th><th>17</th><th>...</th></tr></thead><tbody><tr><td>Position</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>...</td></tr><tr><td>Padded Symbol Pos.</td><td>A</td><td>0A</td><td>00A</td><td>000A</td><td>0000A</td><td>00000A</td><td>000000A</td><td>...</td></tr><tr><td>Denoted Pos.</td><td>A</td><td><sub>1</sub>A</td><td><sub>2</sub>A</td><td><sub>3</sub>A</td><td><sub>4</sub>A</td><td><sub>5</sub>A</td><td><sub>6</sub>A</td><td>...</td></tr></tbody></table></figure>

## A<sup>A</sup>.

Now that we have our Primes primed (ha!) we can look at some natural numbers. Each of these can be written as a product of prime numbers (except 1, which we’ll abstract into _?_ ), so lets do that. Simple enough, we can be more concise too.

<figure style="font-size:13px"><table><thead><tr><th>Natural Number</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr></thead><tbody><tr><td>As Prod. of Primes</td><td>?</td><td>2</td><td>3</td><td>2x2</td><td>5</td><td>2x3</td><td>7</td><td>2x2x2</td><td>3x3</td><td>2x5</td></tr><tr><td>Concise</td><td>?</td><td>2</td><td>3</td><td>2<sup>2</sup></td><td>5</td><td>2x3</td><td>7</td><td>2<sup>3</sup></td><td>3<sup>2</sup></td><td>2x5</td></tr></tbody></table></figure>

### <sub>A</sub>A.

We’re getting there, but what about those cool padded symbolic representations we had, lets use those!

<figure style="font-size:13px"><table><thead><tr><th>Natural Number</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr></thead><tbody><tr><td>As Prod. of Primes</td><td>?</td><td>2</td><td>3</td><td>2x2</td><td>5</td><td>2x3</td><td>7</td><td>2x2x2</td><td>3x3</td><td>2x5</td></tr><tr><td>Concise</td><td>?</td><td>2</td><td>3</td><td>2<sup>2</sup></td><td>5</td><td>2x3</td><td>7</td><td>2<sup>3</sup></td><td>3<sup>2</sup></td><td>2x5</td></tr><tr><td>Symbolic</td><td>?</td><td>A</td><td><sub>1</sub>A</td><td>A<sup>A</sup></td><td><sub>2</sub>A</td><td>A<sub>1</sub>A</td><td><sub>3</sub>A</td><td>A<sup><sub>1</sub>A</sup></td><td><sub>1</sub>A<sup>A</sup></td><td>A<sub>2</sub>A</td></tr></tbody></table></figure>

## A<sub>?</sub>A.

This is getting a bit out of hand but lets continue, there are still natural numbers denoting the leading zeroes within those symbols, lets peform the same routine on them too!

<figure style="font-size:13px"><table><thead><tr><th>Natural Number</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr></thead><tbody><tr><td>As Prod. of Primes</td><td>?</td><td>2</td><td>3</td><td>2x2</td><td>5</td><td>2x3</td><td>7</td><td>2x2x2</td><td>3x3</td><td>2x5</td></tr><tr><td>Concisely</td><td>?</td><td>2</td><td>3</td><td>2<sup>2</sup></td><td>5</td><td>2x3</td><td>7</td><td>2<sup>3</sup></td><td>3<sup>2</sup></td><td>2x5</td></tr><tr><td>Symbolic</td><td>?</td><td>A</td><td><sub>1</sub>A</td><td>A<sup>A</sup></td><td><sub>2</sub>A</td><td>A<sub>1</sub>A</td><td><sub>3</sub>A</td><td>A<sup><sub>1</sub>A</sup></td><td><sub>1</sub>A<sup>A</sup></td><td>A<sub>2</sub>A</td></tr><tr><td>Absurd.</td><td>?</td><td>A</td><td><sub>?</sub>A</td><td>A<sup>A</sup></td><td><sub>A</sub>A</td><td>A<sub>?</sub>A</td><td><sub>?A</sub>A</td><td>A<sup><sub>?</sub>A</sup></td><td><sub>?</sub>A<sup>A</sup></td><td>A<sub>A</sub>A</td></tr></tbody></table></figure>

### <sub><sub>?</sub>A</sub>A ..∞.

With a bit of computing power you can keep this going, here are the first 20 natural numbers generated by the [hideous mess of a program I wrote](https://github.com/bogstandard/nonsense/blob/main/absurd-godel.js) to make this work..

<div style="font-size: 13px;">
1 	?<br>
2 	A<br>
3 	<sub>?</sub>A<br>
4 	A<sup>A</sup><br>
5 	<sub>A</sub>A<br>
6 	A<sub>?</sub>A<br>
7 	<sub><sub>?</sub>A</sub>A<br>
8 	A<sup><sub>?</sub>A</sup><br>
9 	<sub>?</sub>A<sup>A</sup><br>
10 	A<sub>A</sub>A<br>
11 	<sub>A<sup>A</sup></sub>A<br>
12 	A<sup>A</sup><sub>?</sub>A<br>
13 	<sub><sub>A</sub>A</sub>A<br>
14 	A<sub><sub>?</sub>A</sub>A<br>
15 	<sub>?</sub>A<sub>A</sub>A<br>
16 	A<sup>A<sup>A</sup></sup><br>
17 	<sub>A<sub>?</sub>A</sub>A<br>
18 	A<sub>?</sub>A<sup>A</sup><br>
19 	<sub><sub><sub>?</sub>A</sub>A</sub>A<br>
20 	A<sup>A</sup><sub>A</sub>A<br>
</div>

<br>
Here are the first 100 natural numbers in this format comma separated.

<div style="font-size: 13px;">
?,
<sub>?</sub>A,
A<sup>A</sup>,
<sub>A</sub>A,
A<sub>?</sub>A,
<sub><sub>?</sub>A</sub>A,
A<sup><sub>?</sub>A</sup>,
<sub>?</sub>A<sup>A</sup>,
A<sub>A</sub>A,
<sub>A<sup>A</sup></sub>A,
A<sup>A</sup><sub>?</sub>A,
<sub><sub>A</sub>A</sub>A,
A<sub><sub>?</sub>A</sub>A,
<sub>?</sub>A<sub>A</sub>A,
A<sup>A<sup>A</sup></sup>,
<sub>A<sub>?</sub>A</sub>A,
A<sub>?</sub>A<sup>A</sup>,
<sub><sub><sub>?</sub>A</sub>A</sub>A,
A<sup>A</sup><sub>A</sub>A,
<sub>?</sub>A<sub><sub>?</sub>A</sub>A,
A<sub>A<sup>A</sup></sub>A,
<sub>A<sup><sub>?</sub>A</sup></sub>A,
A<sup><sub>?</sub>A</sup><sub>?</sub>A,
<sub>A</sub>A<sup>A</sup>,
A<sub><sub>A</sub>A</sub>A,
<sub>?</sub>A<sup><sub>?</sub>A</sup>,
A<sup>A</sup><sub><sub>?</sub>A</sub>A,
<sub><sub>?</sub>A<sup>A</sup></sub>A,
A<sub>?</sub>A<sub>A</sub>A,
<sub>A<sub>A</sub>A</sub>A,
A<sup><sub>A</sub>A</sup>,
<sub>?</sub>A<sub>A<sup>A</sup></sub>A,
A<sub>A<sub>?</sub>A</sub>A,
<sub>A</sub>A<sub><sub>?</sub>A</sub>A,
A<sup>A</sup><sub>?</sub>A<sup>A</sup>,
<sub><sub>A<sup>A</sup></sub>A</sub>A,
A<sub><sub><sub>?</sub>A</sub>A</sub>A,
<sub>?</sub>A<sub><sub>A</sub>A</sub>A,
A<sup><sub>?</sub>A</sup><sub>A</sub>A,
<sub>A<sup>A</sup><sub>?</sub>A</sub>A,
A<sub>?</sub>A<sub><sub>?</sub>A</sub>A,
<sub><sub><sub>A</sub>A</sub>A</sub>A,
A<sup>A</sup><sub>A<sup>A</sup></sub>A,
<sub>?</sub>A<sup>A</sup><sub>A</sub>A,
A<sub>A<sup><sub>?</sub>A</sup></sub>A,
<sub>A<sub><sub>?</sub>A</sub>A</sub>A,
A<sup>A<sup>A</sup></sup><sub>?</sub>A,
<sub><sub>?</sub>A</sub>A<sup>A</sup>,
A<sub>A</sub>A<sup>A</sup>,
<sub>?</sub>A<sub>A<sub>?</sub>A</sub>A,
A<sup>A</sup><sub><sub>A</sub>A</sub>A,
<sub><sub>?</sub>A<sub>A</sub>A</sub>A,
A<sub>?</sub>A<sup><sub>?</sub>A</sup>,
<sub>A</sub>A<sub>A<sup>A</sup></sub>A,
A<sup><sub>?</sub>A</sup><sub><sub>?</sub>A</sub>A,
<sub>?</sub>A<sub><sub><sub>?</sub>A</sub>A</sub>A,
A<sub><sub>?</sub>A<sup>A</sup></sub>A,
<sub>A<sup>A<sup>A</sup></sup></sub>A,
A<sup>A</sup><sub>?</sub>A<sub>A</sub>A,
<sub><sub>A<sub>?</sub>A</sub>A</sub>A,
A<sub>A<sub>A</sub>A</sub>A,
<sub>?</sub>A<sup>A</sup><sub><sub>?</sub>A</sub>A,
A<sup>A<sub>?</sub>A</sup>,
<sub>A</sub>A<sub><sub>A</sub>A</sub>A,
A<sub>?</sub>A<sub>A<sup>A</sup></sub>A,
<sub>A<sub>?</sub>A<sup>A</sup></sub>A,
A<sup>A</sup><sub>A<sub>?</sub>A</sub>A,
<sub>?</sub>A<sub>A<sup><sub>?</sub>A</sup></sub>A,
A<sub>A</sub>A<sub><sub>?</sub>A</sub>A,
<sub><sub><sub><sub>?</sub>A</sub>A</sub>A</sub>A,
A<sup><sub>?</sub>A</sup><sub>?</sub>A<sup>A</sup>,
<sub>A<sup>A</sup><sub>A</sub>A</sub>A,
A<sub><sub>A<sup>A</sup></sub>A</sub>A,
<sub>?</sub>A<sub>A</sub>A<sup>A</sup>,
A<sup>A</sup><sub><sub><sub>?</sub>A</sub>A</sub>A,
<sub><sub>?</sub>A</sub>A<sub>A<sup>A</sup></sub>A,
A<sub>?</sub>A<sub><sub>A</sub>A</sub>A,
<sub><sub>?</sub>A<sub><sub>?</sub>A</sub>A</sub>A,
A<sup>A<sup>A</sup></sup><sub>A</sub>A,
<sub>?</sub>A<sup>A<sup>A</sup></sup>,
A<sub>A<sup>A</sup><sub>?</sub>A</sub>A,
<sub>A<sub>A<sup>A</sup></sub>A</sub>A,
A<sup>A</sup><sub>?</sub>A<sub><sub>?</sub>A</sub>A,
<sub>A</sub>A<sub>A<sub>?</sub>A</sub>A,
A<sub><sub><sub>A</sub>A</sub>A</sub>A,
<sub>?</sub>A<sub><sub>?</sub>A<sup>A</sup></sub>A,
A<sup><sub>?</sub>A</sup><sub>A<sup>A</sup></sub>A,
<sub><sub>A<sup><sub>?</sub>A</sup></sub>A</sub>A,
A<sub>?</sub>A<sup>A</sup><sub>A</sub>A,
<sub><sub>?</sub>A</sub>A<sub><sub>A</sub>A</sub>A,
A<sup>A</sup><sub>A<sup><sub>?</sub>A</sup></sub>A,
<sub>?</sub>A<sub>A<sub>A</sub>A</sub>A,
A<sub>A<sub><sub>?</sub>A</sub>A</sub>A,
<sub>A</sub>A<sub><sub><sub>?</sub>A</sub>A</sub>A,
A<sup><sub>A</sub>A</sup><sub>?</sub>A,
<sub>A<sup><sub>?</sub>A</sup><sub>?</sub>A</sub>A,
A<sub><sub>?</sub>A</sub>A<sup>A</sup>,
<sub>?</sub>A<sup>A</sup><sub>A<sup>A</sup></sub>A,
A<sup>A</sup><sub>A</sub>A<sup>A</sup>,
<sub><sub>A</sub>A<sup>A</sup></sub>A
</div>