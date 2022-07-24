# **Twitter Simulator**

A program to simulate twitter and outputs user interaction feed to the terminal

### How to run the program

* `git clone https://github.com/joesome-git/twitter-simulator.git`
* `yarn install`
* `yarn run start`

### Expected output

```bash
Alan
        @Alan: If you have a procedure with 10 parameters, you probably missed some.
        @Alan: Random numbers should not be generated with a method chosen at random.
Martin
Ward
        @Alan: If you have a procedure with 10 parameters, you probably missed some.
        @Ward: There are only two hard things in Computer Science: cache invalidation, naming things and off-by-1 errors.
        @Alan: Random numbers should not be generated with a method chosen at random.
```
### How to run the tests

* `yarn run tests`

### Expected output

```bash
yarn run v1.22.19
$ jest
 PASS  tests/sort.test.js
 PASS  tests/read.test.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.389 s, estimated 1 s
Ran all test suites.
✨  Done in 1.61s.