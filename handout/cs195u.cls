% Based on cs1971.cls
%
% Documents that use this class should call \asgn{} with the name of the 
% assignment, and \due{} with the due date. Alternatively, they can call
% \misc{} with a title and \docdate{} with a date that will be printed as the
% subtitle (without the ``Due:'' prefix), to create a non-assignment document.
%
% If you want to change the professor name, you can either edit this file
% and change the \DeclareRobustCommand{\CS@prof}, or have all documents that
% use this class call \prof{} with the new name.

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{cs195u}[2015/11/24 v1.1 (ebirenba)]
\LoadClass[11pt]{article}
\RequirePackage{amsmath}
\RequirePackage{verbatim} % has the "comment" environment
\RequirePackage{import}
\RequirePackage[margin=1in]{geometry}

\DeclareRobustCommand{\CS@classnum}{\textbf{CS1950U}}
\DeclareRobustCommand{\CS@classname}{\textbf{Topics in 3D Game Engine Development}}
\DeclareRobustCommand{\CS@prof}{\textbf{Daniel Ritchie}}
\DeclareRobustCommand{\CS@asgnname}{Assignment}
\DeclareRobustCommand{\CS@dateprefix}{}
\DeclareRobustCommand{\CS@duedate}{TBA}
\newcommand*{\docdate}[1]{\DeclareRobustCommand{\CS@duedate}{#1}}
\newcommand*{\due}{\docdate}
\newcommand*{\asgn}[1]{
  \DeclareRobustCommand{\CS@asgnname}{#1}
  \DeclareRobustCommand{\CS@dateprefix}{Due: }
}
\newcommand*{\misc}[1]{
  \DeclareRobustCommand{\CS@asgnname}{#1}
  \DeclareRobustCommand{\CS@dateprefix}{}  
}
\newcommand*{\prof}[1]{
  \DeclareRobustCommand{\CS@prof}{#1}
}
\parskip = 6pt
\parindent = 0pt

\newlength{\CS@classnumwidth}
\settowidth{\CS@classnumwidth}{\CS@classnum}


\newcommand{\ps@firsthead}{ 
  \renewcommand{\@oddhead}{ 
    \CS@classnum\hfill
    \CS@classname\hfill
    \makebox[\CS@classnumwidth][r]{\CS@prof}
  } 
  \renewcommand{\@oddfoot}{} 
  \renewcommand{\@evenhead}{\@oddhead} 
  \renewcommand{\@evenfoot}{\@oddfoot} 
}
\newcommand{\ps@head}{ 
  \renewcommand{\@oddhead}{ 
    \CS@classnum
    \hfill 
    \CS@asgnname\hfill 
    \makebox[\CS@classnumwidth][r]{\textbf{\CS@duedate}} 
} 
  \renewcommand{\@oddfoot}{\hfill \thepage \hfill} 
  \renewcommand{\@evenhead}{\@oddhead} 
  \renewcommand{\@evenfoot}{\@oddfoot} 
}

\pagestyle{head}
\thispagestyle{firsthead}
\newenvironment{blockindent}{\begin{list}{\quad}{}}{\end{list}}

\AtBeginDocument{
 \begin{center}
  {\huge \bf \CS@asgnname}\\ 
  {\Large \em\vspace{1ex}\CS@dateprefix\CS@duedate}
 \end{center}
}
