## Angular matcher hotReload error

Create for the follwing issue: https://github.com/nrwl/nx/issues/28502

###Steps to Reproduce
1. Download this repo
2. npm i
3. nx serve
4. You'll see, that you can let the url empty, or add foo or bar and it will work
5. Adding fooBar would result in an error in the browser
6. Select the content of the nx-welcome.component and delete it
7. Nothing happen -> Was expecting a recompile
