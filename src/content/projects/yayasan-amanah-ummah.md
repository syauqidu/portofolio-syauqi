---
title: Sistem Pengelola Donatur Yayasan Amanah Ummah
summary: End-to-end quality assurance across Agile Scrum sprints, combining black-box test design, manual execution, defect management, and Katalon Studio automation.
category: qa
role: Quality Assurance (QA)
projectType: Undergraduate Capstone Project
tags: [Katalon Studio, Black-box Testing, Agile Scrum, Regression Testing]
featured: true
order: 1
published: true
---

## Overview

I worked as the Quality Assurance (QA) contributor on **Sistem Pengelola Donatur Yayasan Amanah Ummah**, a donor management system developed as an undergraduate capstone project.

The team followed Agile Scrum. Each sprint introduced a defined set of modules and user stories, with acceptance criteria providing the basis for testing. My work connected those requirements to test cases, execution results, and defect reports throughout development.

## My responsibilities

I followed the Software Testing Life Cycle (STLC): test planning, test analysis and design, test environment setup, execution, defect reporting, retesting, regression testing, and reporting and closure. The frontend and backend developers implemented features and resolved defects; I focused on checking behavior and verifying fixes.

The following sequence describes the testing workflow used within the sprint cycle:

1. **Plan the scope.** Review the sprint’s modules, user stories, and acceptance criteria to establish what needed to be tested.
2. **Analyze and design.** Translate requirements into test cases, selecting black-box techniques appropriate to the behavior under test.
3. **Prepare the environment.** Set up the testing environment and access needed to execute the planned scenarios.
4. **Execute and document.** Run the tests, compare actual and expected results, and record findings.
5. **Report and verify.** Document defects for the development team, retest fixes, and perform relevant regression checks.
6. **Report and close.** Bring together execution results and defect status in the testing report.

## Test design

I designed test cases around the acceptance criteria of each user story. I used three black-box techniques, selecting them according to the characteristics of the requirement:

### Boundary Value Analysis (BVA)

For requirements with defined limits, I considered values at and around the boundaries. This helped structure checks for behavior that could differ at the edges of an accepted range.

### Decision Table Testing (DT)

For requirements involving combinations of conditions, I used decision tables to organize the conditions and their expected outcomes into testable scenarios.

### Equivalence Partitioning (EQP)

I grouped inputs into partitions expected to behave similarly and selected representative values from the relevant valid and invalid groups.

These techniques informed the test cases; they were not a substitute for the user stories and their acceptance criteria.

## Test environment & execution

I prepared the environment and access required for testing, including the project’s testing infrastructure and VPS access as needed. The tests ran in an environment prepared for testing.

During manual functional testing, I executed the documented scenarios and compared the actual behavior with the expected result. I recorded the execution outcome and documented discrepancies so that the team could investigate them.

## Defect management

I recorded findings in bug reports for the frontend and backend developers to address. After a fix was available, I retested the affected behavior to check whether it met the expected result.

I also performed relevant regression testing to check whether changes affected behavior that had previously worked. Defect reporting, retesting, and regression were part of an ongoing feedback loop within the sprint workflow.

## Automation with Katalon Studio

I built functional web automation tests in **Katalon Studio**, using the manual test cases as the starting point. The aim was to support repeated execution across later sprints, particularly regression testing.

My workflow was to:

1. **Record the scenario** with Web Recorder, following a manual test case through the website’s flow.
2. **Review the recorded steps and test objects**, adjusting them to reflect the intended scenario.
3. **Use Spy Web when needed** to identify objects more precisely and refine the objects used by the test.
4. **Adapt scripts for specific interactions**, including file uploads where recorded steps needed adjustment.
5. **Organize automated test cases into module-based Test Suites**, so related checks could be executed together.

The suites supported repeatable testing as development progressed. No measured time savings or automation coverage percentage is claimed here.

## Automation boundaries

Automation did not cover flows involving the payment gateway or certain third-party integrations, including email and registration OTP.

> This is a boundary of the automated test scope. It does not mean that these features were excluded from manual testing.

Keeping that distinction clear matters when interpreting the automated suites: they represent the scenarios selected for automation, rather than every possible check on the system.

## Deliverables

The artifacts I produced or maintained included:

- **Test cases** based on user stories and acceptance criteria.
- **Test execution documentation** recording expected and actual results.
- **Bug reports** supporting follow-up by the development team.
- **Automated test cases** implemented in Katalon Studio.
- **Module-based Test Suites** for organizing repeated execution.
- **Testing reports** bringing together results and defect status for reporting and closure.

Together, these artifacts documented what was checked, what was found, and how fixes were verified across the QA cycle.
