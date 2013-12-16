socketworker
============

A 'Not Safe to Commit' (NSTC) spike of web sockets using a webworker - no dependencies

Just run from a local webserver - 'brew install nginx' perhaps?

This example uses SharedWorker, although not believed  to be necessary for the functionality implemented thus far ;-)

Any code in this repo that actually does run, only does so in Chrome, although shared webworkers are supported in Opera and Safari too, however caniuse.com shows limited cross-browser (specifically no  iOS / Android / Firefox / IE) support as of Dec '13, so you should probably be using dedicated workers for now...

http://caniuse.com/#feat=webworkers
vs
http://caniuse.com/#feat=sharedworkers

If you still want to look at sharedworkers - this post will probably be far more helpful, than any code here http://greenido.wordpress.com/2011/11/03/web-workers-part-3-out-of-3-shared-wrokers/

or if you like specs, just go here http://www.w3.org/TR/workers/#shared-workers-introduction



