# terminal-simulators
Windows Command Prompt (CMD) &amp; Ubuntu Terminal Simulator

## Features

**Windows CMD Supported Command**
`whoami, cls`

**Ubuntu Terminal Supported Command**
`ls, cd, touch, echo, cat, rm, mkdir, rmdir, sudo, su, adduser, deluser, chmod, pwd, whoami, clear, history, man`

-   **ls**: list directory contents
-   **cd**: change working directory
-   **touch**: create new file
-   **echo**: display a line of text (can redirect the output into a file)
-   **cat**: print file content on the standard output
-   **rm**: remove files or directories (just dont try to remove '/' 🤫)
-   **mkdir**: create new directory
-   **rmdir**: remove empty directory
-   **sudo**: execute a command as a super (root) user
-   **su**: change current active user
-   **adduser**: add new user
-   **deluser**: remove existing user (just dont try to remove root 👀)
-   **chmod**: change file mode (permission)
-   **pwd**: show current/working directory
-   **whoami**: show current active user
-   **chmod**: change file mode (permission)
-   **clear**: clear the terminal screen
-   **history**: show history of all previous input command
-   **man**: show manual to each or all commands
-   Natural text navigation:

-   No HTML input fields were used, every text navigation/manipulation was manually built
-   Arrow key left/right: move cursor between text
-   Arrow key up/down: traversing command history
-   Home/End key: move cursor to the head/tail of text
-   Backspace/Del key: remove character to the left/right of cursor of text

## Future Improvements

-   Optimize permission checking for  **ls**,  **cd**
-   Upgrade  **mkdir**,  **rmdir**,  **rm**  to allow nesting file path to directory/file
-   Add feature for command piping
-   Code optimizations, code reorganization
-   Implementing Tab key: auto-complete file name in during command prompting
-   To be updated

## License

This project is licensed under the GNU Public License. See the  [LICENSE](https://github.com/sethuaung/terminal-simulators/blob/main/LICENSE)  file for details.
