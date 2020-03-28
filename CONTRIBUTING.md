# How to contribute

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

Here are some important resources:

  * [Our roadmap](#) is the 10k foot view of where we're going, and
  * [TODO](#) is our day-to-day project management space.
  * Mailing list: Join our [developer list](#)
  * [Bugs](#)? Report them here

### Testing
We use [cypress.io](https://docs.cypress.io) and its [Libraries and Tools]([cypress.io](https://docs.cypress.io/guides/guides/stubs-spies-and-clocks.html#Libraries-and-Tools)) for unit and e2e testing.

Please use cypress when writing tests.
Decide [what type of test](https://docs.cypress.io/faq/questions/general-questions-faq.html#When-should-I-write-a-unit-test-and-when-should-I-write-an-end-to-end-test) you should write?


### Reporting Bugs

This section guides you through submitting a bug report for Atom. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/mlnck/.opensource/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Determine [which repository the problem should be reported in](https://github.com/mlnck?tab=repositories)**.
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Amlnck)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](https://github.com/mlnck?tab=repositories)) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](https://github.com/mlnck/.opensource/blob/master/.github/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started Atom, e.g. which command exactly you used in the terminal, or how you started Atom otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an Atom command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting a crash**, include the stack trace (which can be found from the online developer tools) in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance or memory**, nclude the stack trace (which can be found from the online developer tools) in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of Atom) or was this always a problem?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **Which browser (and version number of the browser) are you using?**
* **What's the name and version of the OS you're using**?
* **Are you running the browser in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?
* **Which packages do you have installed?** You can get that list by running `npm -ls`.
* **Are you using local configuration files**? If so, provide the contents of those files, preferably in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines) or with a link to a [gist](https://gist.github.com/).
* **Are you using with multiple monitors?** If so, can you reproduce the problem when you use a single monitor?
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Atom, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/mlnck/.opensource/blob/master/.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Determine [which repository the enhancement should be suggested in](https://github.com/mlnck?tab=repositories).**
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Amlnck)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](https://github.com/mlnck?tab=repositories) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part area the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most users and isn't something that can or should be implemented as a new feature.
* **List some other applications where this enhancement exists.**
* **Specify which browser (and version number of the browser) you're using.** 
* **Specify the name and version of the OS you're using.**

## Styleguides

### Git Commit Messages

* Use the _Git Commit Template_ from the [Add Git Commit Template](#add-git-commit-template) instructions below
> important - make sure to do the above :point_up:
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Include applicable emoji on first line
* Limit the first line width line to 50 characters or less (not including the emoji)
* Limit the description paragraph(s) width to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title

#### Add Git Commit Template
* To use the commit Template run the following from terminal
```
$ cd <DIRECTORY/OF/THIS/FILE>
$ echo "[commit]\n\ttemplate = $PWD/.git/info/template.commit" >> .git/config && curl https://raw.githubusercontent.com/mlnck/.opensource/master/.github/GIT_COMMIT_TEMPLATE/template.commit -o .git/info/template.commit
```

### JavaScript Styleguide

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Do not use semi-colons unless required
* [Allman](https://en.wikipedia.org/wiki/Indentation_style#Allman_style) style braces
  * Allowing for single line
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName
  { 
    function fnc(){ return true }
  }

  // Instead of:
  class ClassName {
    function fnc(){
      return true;
    };
  }
  export default ClassName
  ```
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Node Modules (such as `React, {useClass}`)
    * Local Modules (using relative paths)
  * For each of the above arrange in alphabetical order unless errors would result
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties

### Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

#### Example

```
# Public: Disable the package with the given name.
#
# * `name`    The {String} name of the package to disable.
# * `options` (optional) The {Object} with disable options (default: {}):
#   * `trackTime`     A {Boolean}, `true` to track the amount of time taken.
#   * `ignoreErrors`  A {Boolean}, `true` to catch and ignore errors thrown.
# * `callback` The {Function} to call after the package has been disabled.
#
# Returns `undefined`.
const disablePackage = (name, options, callback) =>
```

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all mlnck.me repositories.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `mlnck/*` and all mlnck-owned packages which are labeled as bugs, but still need to be reliably reproduced](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Abug+label%3Aneeds-reproduction) or perhaps [open pull requests in `mlnck/.opensource` which haven't been reviewed yet](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+repo%3Amlnck%2F.opensource+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `mlnck/.opensource` only and also across all _mlnck_ repositories. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on `mlnck/.opensource` if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name | `mlnck/mlnck.openSource.<REPOSITORY_NAME>` :mag_right: | `mlnck`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-mlnck-repo-label-enhancement] | [search][search-mlnck-org-label-enhancement] | Feature requests. |
| `bug` | [search][search-mlnck-repo-label-bug] | [search][search-mlnck-org-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-mlnck-repo-label-question] | [search][search-mlnck-org-label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-mlnck-repo-label-feedback] | [search][search-mlnck-org-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-mlnck-repo-label-help-wanted] | [search][search-mlnck-org-label-help-wanted] | The mlnck core team would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-mlnck-repo-label-beginner] | [search][search-mlnck-org-label-beginner] | Less complex issues which would be good first issues to work on for users who want to contribute to mlnck. |
| `more-information-needed` | [search][search-mlnck-repo-label-more-information-needed] | [search][search-mlnck-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-mlnck-repo-label-needs-reproduction] | [search][search-mlnck-org-label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| `blocked` | [search][search-mlnck-repo-label-blocked] | [search][search-mlnck-org-label-blocked] | Issues blocked on other issues. |
| `duplicate` | [search][search-mlnck-repo-label-duplicate] | [search][search-mlnck-org-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-mlnck-repo-label-wontfix] | [search][search-mlnck-org-label-wontfix] | The mlnck core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-mlnck-repo-label-invalid] | [search][search-mlnck-org-label-invalid] | Issues which aren't valid (e.g. user errors). |
| `package-idea` | [search][search-mlnck-repo-label-package-idea] | [search][search-mlnck-org-label-package-idea] | Feature request which might be good candidates for new packages, instead of extending mlnck or core mlnck packages. |
| `wrong-repo` | [search][search-mlnck-repo-label-wrong-repo] | [search][search-mlnck-org-label-wrong-repo] | Issues reported on the wrong repository (e.g. a bug related to the [Settings View package](https://github.com/mlnck/settings-view) was reported on [mlnck core](https://github.com/mlnck/mlnck.openSource.<REPOSITORY_NAME>)). |

#### Topic Categories

| Label name | `mlnck/mlnck.openSource.<REPOSITORY_NAME>` :mag_right: | `mlnck`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `windows` | [search][search-mlnck-repo-label-windows] | [search][search-mlnck-org-label-windows] | Related to mlnck running on Windows. |
| `linux` | [search][search-mlnck-repo-label-linux] | [search][search-mlnck-org-label-linux] | Related to mlnck running on Linux. |
| `mac` | [search][search-mlnck-repo-label-mac] | [search][search-mlnck-org-label-mac] | Related to mlnck running on macOS. |
| `documentation` | [search][search-mlnck-repo-label-documentation] | [search][search-mlnck-org-label-documentation] | Related to any type of documentation (e.g. [API documentation](https://mlnck.io/docs/api/latest/) and the [flight manual](https://flight-manual.mlnck.io/)). |
| `performance` | [search][search-mlnck-repo-label-performance] | [search][search-mlnck-org-label-performance] | Related to performance. |
| `security` | [search][search-mlnck-repo-label-security] | [search][search-mlnck-org-label-security] | Related to security. |
| `ui` | [search][search-mlnck-repo-label-ui] | [search][search-mlnck-org-label-ui] | Related to visual design. |
| `api` | [search][search-mlnck-repo-label-api] | [search][search-mlnck-org-label-api] | Related to mlnck's public APIs. |
| `uncaught-exception` | [search][search-mlnck-repo-label-uncaught-exception] | [search][search-mlnck-org-label-uncaught-exception] | Issues about uncaught exceptions, normally created from the [Notifications package](https://github.com/mlnck/notifications). |
| `crash` | [search][search-mlnck-repo-label-crash] | [search][search-mlnck-org-label-crash] | Reports of mlnck completely crashing. |
| `auto-indent` | [search][search-mlnck-repo-label-auto-indent] | [search][search-mlnck-org-label-auto-indent] | Related to auto-indenting text. |
| `encoding` | [search][search-mlnck-repo-label-encoding] | [search][search-mlnck-org-label-encoding] | Related to character encoding. |
| `network` | [search][search-mlnck-repo-label-network] | [search][search-mlnck-org-label-network] | Related to network problems or working with remote files (e.g. on network drives). |
| `git` | [search][search-mlnck-repo-label-git] | [search][search-mlnck-org-label-git] | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |

#### `mlnck/mlnck.openSource.<REPOSITORY_NAME>` Topic Categories

| Label name | `mlnck/mlnck.openSource.<REPOSITORY_NAME>` :mag_right: | `mlnck`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `editor-rendering` | [search][search-mlnck-repo-label-editor-rendering] | [search][search-mlnck-org-label-editor-rendering] | Related to language-independent aspects of rendering text (e.g. scrolling, soft wrap, and font rendering). |
| `build-error` | [search][search-mlnck-repo-label-build-error] | [search][search-mlnck-org-label-build-error] | Related to problems with building mlnck from source. |
| `error-from-pathwatcher` | [search][search-mlnck-repo-label-error-from-pathwatcher] | [search][search-mlnck-org-label-error-from-pathwatcher] | Related to errors thrown by the [pathwatcher library](https://github.com/mlnck/node-pathwatcher). |
| `error-from-save` | [search][search-mlnck-repo-label-error-from-save] | [search][search-mlnck-org-label-error-from-save] | Related to errors thrown when saving files. |
| `error-from-open` | [search][search-mlnck-repo-label-error-from-open] | [search][search-mlnck-org-label-error-from-open] | Related to errors thrown when opening files. |
| `installer` | [search][search-mlnck-repo-label-installer] | [search][search-mlnck-org-label-installer] | Related to the mlnck installers for different OSes. |
| `auto-updater` | [search][search-mlnck-repo-label-auto-updater] | [search][search-mlnck-org-label-auto-updater] | Related to the auto-updater for different OSes. |
| `deprecation-help` | [search][search-mlnck-repo-label-deprecation-help] | [search][search-mlnck-org-label-deprecation-help] | Issues for helping package authors remove usage of deprecated APIs in packages. |
| `electron` | [search][search-mlnck-repo-label-electron] | [search][search-mlnck-org-label-electron] | Issues that require changes to [Electron](https://electron.mlnck.io) to fix or implement. |

#### Pull Request Labels

| Label name | `mlnck/mlnck.openSource.<REPOSITORY_NAME>` :mag_right: | `mlnck`‑org :mag_right: | Description
| --- | --- | --- | --- |
| `work-in-progress` | [search][search-mlnck-repo-label-work-in-progress] | [search][search-mlnck-org-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-mlnck-repo-label-needs-review] | [search][search-mlnck-org-label-needs-review] | Pull requests which need code review, and approval from maintainers or mlnck core team. |
| `under-review` | [search][search-mlnck-repo-label-under-review] | [search][search-mlnck-org-label-under-review] | Pull requests being reviewed by maintainers or mlnck core team. |
| `requires-changes` | [search][search-mlnck-repo-label-requires-changes] | [search][search-mlnck-org-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-mlnck-repo-label-needs-testing] | [search][search-mlnck-org-label-needs-testing] | Pull requests which need manual testing. |

[search-mlnck-repo-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aenhancement
[search-mlnck-org-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aenhancement
[search-mlnck-repo-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Abug
[search-mlnck-org-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Abug
[search-mlnck-repo-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aquestion
[search-mlnck-org-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aquestion
[search-mlnck-repo-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Afeedback
[search-mlnck-org-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Afeedback
[search-mlnck-repo-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Ahelp-wanted
[search-mlnck-org-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Ahelp-wanted
[search-mlnck-repo-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Abeginner
[search-mlnck-org-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Abeginner
[search-mlnck-repo-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Amore-information-needed
[search-mlnck-org-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Amore-information-needed
[search-mlnck-repo-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aneeds-reproduction
[search-mlnck-org-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aneeds-reproduction
[search-mlnck-repo-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Atriage-help-needed
[search-mlnck-org-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Atriage-help-needed
[search-mlnck-repo-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Awindows
[search-mlnck-org-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Awindows
[search-mlnck-repo-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Alinux
[search-mlnck-org-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Alinux
[search-mlnck-repo-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Amac
[search-mlnck-org-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Amac
[search-mlnck-repo-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Adocumentation
[search-mlnck-org-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Adocumentation
[search-mlnck-repo-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aperformance
[search-mlnck-org-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aperformance
[search-mlnck-repo-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Asecurity
[search-mlnck-org-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Asecurity
[search-mlnck-repo-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aui
[search-mlnck-org-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aui
[search-mlnck-repo-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aapi
[search-mlnck-org-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aapi
[search-mlnck-repo-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Acrash
[search-mlnck-org-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Acrash
[search-mlnck-repo-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aauto-indent
[search-mlnck-org-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aauto-indent
[search-mlnck-repo-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aencoding
[search-mlnck-org-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aencoding
[search-mlnck-repo-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Anetwork
[search-mlnck-org-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Anetwork
[search-mlnck-repo-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Auncaught-exception
[search-mlnck-org-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Auncaught-exception
[search-mlnck-repo-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Agit
[search-mlnck-org-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Agit
[search-mlnck-repo-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Ablocked
[search-mlnck-org-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Ablocked
[search-mlnck-repo-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aduplicate
[search-mlnck-org-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aduplicate
[search-mlnck-repo-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Awontfix
[search-mlnck-org-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Awontfix
[search-mlnck-repo-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Ainvalid
[search-mlnck-org-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Ainvalid
[search-mlnck-repo-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Apackage-idea
[search-mlnck-org-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Apackage-idea
[search-mlnck-repo-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Awrong-repo
[search-mlnck-org-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Awrong-repo
[search-mlnck-repo-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aeditor-rendering
[search-mlnck-org-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aeditor-rendering
[search-mlnck-repo-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Abuild-error
[search-mlnck-org-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Abuild-error
[search-mlnck-repo-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aerror-from-pathwatcher
[search-mlnck-org-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aerror-from-pathwatcher
[search-mlnck-repo-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aerror-from-save
[search-mlnck-org-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aerror-from-save
[search-mlnck-repo-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aerror-from-open
[search-mlnck-org-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aerror-from-open
[search-mlnck-repo-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Ainstaller
[search-mlnck-org-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Ainstaller
[search-mlnck-repo-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aauto-updater
[search-mlnck-org-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aauto-updater
[search-mlnck-repo-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Adeprecation-help
[search-mlnck-org-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Adeprecation-help
[search-mlnck-repo-label-electron]: https://github.com/search?q=is%3Aissue+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+is%3Aopen+label%3Aelectron
[search-mlnck-org-label-electron]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Amlnck+label%3Aelectron
[search-mlnck-repo-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Awork-in-progress
[search-mlnck-org-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Amlnck+label%3Awork-in-progress
[search-mlnck-repo-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aneeds-review
[search-mlnck-org-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Amlnck+label%3Aneeds-review
[search-mlnck-repo-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aunder-review
[search-mlnck-org-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Amlnck+label%3Aunder-review
[search-mlnck-repo-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Arequires-changes
[search-mlnck-org-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Amlnck+label%3Arequires-changes
[search-mlnck-repo-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3Amlnck%2Fmlnck.openSource.<REPOSITORY_NAME>+label%3Aneeds-testing
[search-mlnck-org-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3Amlnck+label%3Aneeds-testing

[beginner]:https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3Amlnck+sort%3Acomments-desc
[help-wanted]:https://github.com/search?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3Amlnck+sort%3Acomments-desc+-label%3Abeginner

Thanks,
mlnck.me
