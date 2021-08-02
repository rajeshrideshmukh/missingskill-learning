# 📌Introduction

**Operating System** _(OS)_ is a software that manages all the system processes and it contains a kernel which performs all the task that are assigned by the OS.

So, Linux is basically a Kernel and **not an operating system**. It acts as an interface between the user application and the hardware.

> ❗ _A kernel is a software that is present at the center of an operating system. And it's task is to manage all the operations of computer and hardware._

# History

The name '**Linux**' comes from the name of it's developer i.e. Linus Torvalds.

- In 1970, Bell Lab developed an operating system called "**UNIX**"
- In 1977, some researchers from University of California, Berkeley along with previous employees of Bell Lab came together to create BSD (Berkeley Software Distribution).
  BSD was a licensed OS which was more cheaper tha UNIX.
- In 1985, Richard Stallman created a `non-proprietary` version of UNIX name GNU. HURD was the kernel of GNU which later did not receieve great response.
- In 1990, Bell Lab filed a legal defamation case on BSD stating that they stole their code.

  Meanwhile, Linus Torvalds created his own free kernel which was written in C.

- In 1991, Richard Stallman & Linus Torvalds came together to create a firm GNU/Linux which was open source and completely free.

> ❗ _Non-proprietary software - A software that has no patent or copyright conditions associated with it._

# Why to Use ?

## 🔵 Open source

    Linux is freely available to anyone.
    It is open source, that means the source code of Linux is available and accessible for use, modification and even distribution with it's original rights by anyone and for any purpose.

## 🔵 Linux Distribution

    A Linux distribution, also called as Linux distro, is an operating system compiled from components developed by various open source projects and programmers.

    Because it is open source software, anyone can make their own Linux distribution by assembling it from the source code themselves, or by modifying an existing distribution.

     Around 600 + Linux Distributions are available and some of the popular Linux distributions are:

        🔸 Debian
        🔸 Ubuntu
        🔸 Linux Mint
        🔸 Red Hat Enterprise
        🔸 Fedora
        🔸 CentOS

> ❗ _\*nix denotes all distrubution inspired from Unix which include FreeBSD, FreeBSD, etc._

[⬆️ back on top](#introduction)

# Linux Commands

Linux's shell/terminal is the main part. All the commands are performed in the shell of Linux.

A shell is basically a program that receives commands from the user and gives it to the OS to process, and it shows the output. Linux has a CLI (command line interface).

> _All the following commands are performed on GitBash._

1.  **ls**
    -> To list all files and directories that are present in the current directory.
    ![ls](../resources/linux-output/ls-cmd.png)
    **ls command with flags** :

    - ls -a : To show the hidden files
    - ls -l : To show the list in more detail like access permission, size, ownwer, etc.
    - ls -h : To show file size in human readable format.
    - ls -t : To sort the list in ascending order of the modification time.
    - ls -r :To show the list in reverse order.

      ![ls](../resources/linux-output/ls-alht.png)

1.  **cd**
    -> To jump from one directory to other.

    ![ls](../resources/linux-output/cd-cmd.png)

**cd command with flags** :

- cd - : To jump to previously visited directory.

  ![ls](../resources/linux-output/cd--cmd.png)

- cd .. : To jump one directory back

  ![ls](../resources/linux-output/cd..cmd.png)

- cd / cd ~ : To jump directly into home directory.

  ![ls](../resources/linux-output/cd..cmd.png)
  ![ls](../resources/linux-output/cd~cmd.png)

- cd / : To jump directly into root directory.
  ![ls](../resources/linux-output/cd_cmd.png)

  [⬆️ back on top](#introduction)

# Linux File System

[⬆️ back on top](#introduction)
