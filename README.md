# Sorcerer RPG Dice Roller

[![Codeship Status for ulisesrmzroche/sorcerer-rpg-dice-roller](https://app.codeship.com/projects/787c8c30-b418-0138-507a-66063cddf7a7/status?branch=master)](https://app.codeship.com/projects/404346)

## Getting Started

This is a Dice Roll Simulator for the RPG "Sorcerer" by Ron Edwards. I am using this to write my novel "Grimoire of a Nahual" on Medium

[Grimoire of a Nahual](https://medium.com/grimoire-of-a-nagual-kingdom-come)
[Dice Roll App](https://sorcerer-rpg-dice-roller.vercel.app/)

## Rules

This explanation of the rules comes from the Wikipedia entry: https://en.wikipedia.org/wiki/Sorcerer_(role-playing_game)

Conflict resolution is handled with opposed rolls in dice pools. These dice can be any size, but must be uniform (that is, you only play with ten-sided dice, or six-sided dice, etc., but never mix them.) During conflict, each opposing force rolls their dice pool. The single highest die result wins, where ties are removed from the pool before looking at the next highest result. After a winner is established, the other dice are compared to determine the degree of success: the winner receives one 'Victory' for each die that shows a higher value than the highest of the loser's dice.

Player 1 rolls 10, 10, 5, 3 and Player 2 rolls 10, 9, 4, 4. Here Player 1 wins with 1 Victory.
Player 1 rolls 7, 6, 5, 2 and Player 2 rolls 3, 2, 1. Here Player 1 wins with 3 Victories.
Player 1 rolls 10, 4, 4, 2 and Player 2 rolls 10, 7, 5, 4. The 10s cancel and Player 2 wins with 2 Victory (because Player 2 did not gain a Victory from their 4).
Player 1 rolls 10, 6, 4, 4 and Player 2 rolls 3, 2, 2, 1. Player 1 wins with 4 Victories.
The number of victories determine how close the contest was: a single victory means a close win, and four or more victories is total domination. If the player receives Victories equal to their number of dice, it is considered a Total Victory. That character should receive some sort of additional advantage.

## Tech Stack

* Node 12
* NextJS
* Bulma
* Vercel
* Jest