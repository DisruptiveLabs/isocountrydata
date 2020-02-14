@comanage/isocountrydata
========================

A simple package to expose up-to-date ISO country and subdivision data.

This is really just a set of scripts to generate more user-friendly JSON files, and export them in a easily 
typescript-importable manner. The source data comes from Debian's iso-codes package, the source of which
is included as a git submodule here. 

### Updating

Updating this package *should* be as simple as the following 

```bash
git submodule foreach git pull
yarn install
yarn run build
yarn publish --patch
# git add, commit, push as well.
```

Eventually, this will be automated on updates to the debian package.
