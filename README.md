# PhD Assess Meta

Provide the associated TypeScript types to PhDAssess consumers.

## Install the types

> `npm install --save-dev git+https://github.com/epfl-si/PhDAssess-meta`

Then use it in your project like this:
> `const job = zeebeJob as PhDAssessJob`


# DO / DON'T

## BPMN modification

### DO

#### Update `./bpmn/CHANGELOG.md`
- when changing something on the bpmn → add the text change to "Undeployed"
- when pushing into prod, set the "Undeployed" title to the new version number and re-add the "Undeployed" title

#### Lint
- Run `bpmnlint ./bpmn/phdAssessProcess.bpmn`
