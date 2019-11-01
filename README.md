# _Beep! Boop!_

#### _A program which establishes a range of numbers based off of a number inputted by the user and replaces certain values with text, 11/1/19_

#### By _**Geoffrey Orengo**_

## _Description_

* _Program asks user to input a number._
* _The program establishes a range starting at zero and ending at the user's number._
* _The program replaces any digit containing a one in the range with Beep!._
* _The program replaces any digit containing a two in the range with Boop!._
* _The program replaces any digit containing a three in the range with "I'm sorry Dave, I can't do that."._

| Specifications                                                       | Input | Output                                                   |
|----------------------------------------------------------------------|-------|----------------------------------------------------------|
|     Program returns a range from 0 to the user's inputted number     | 4     | 0,1,2,3,4                                                |
| If input  isn't a number return the value                            | A     | A                                                        |
| If a number in the range contains a 1 then replace with "Beep!"      | 1     | 0, "Beep!"                                               |
| If there is a 2 then replace with "Boop!"                            | 2     | 0,"Beep!", "Boop!"                                       |
| If there is a 3 then replace with "I'm sorry Dave, I can't do that." | 5     | 0,"Beep!","Boop!","I'm sorry Dave, I can't do that.",4,5 |
| The behavior for 2 overrides the behavior for 1                      | 12    | "Boop!"                                                  |
| The behavior for 3 overrides the behavior for 2                      | 13    | "I'm sorry Dave, I can't do that."                       |

## Setup/Installation Requirements

* _The index.html file can be used on a web browser of the user's choice._

## Known Bugs

## Support and contact details

_If you have any issues or have suggestions on how to improve my code, please feel free to contact me. [Email me.](mailto:geoff.orengo@yahoo.com)_

## Technologies used

 _The program was created using html, css, and Javascript._

### License

Copyright (c) 2019 **_Geoffrey Orengo_**
