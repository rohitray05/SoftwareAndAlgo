1.	Identify SOLID Principles
Choose a large open source project written in TypeScript preferably (choose another OOP language if you want: Java, C#, Ruby). You may want to look at GitHub. A project may be considered large enough if it contains at least 30 classes.

Try to identify at least 3 or more (preferably) examples of the SOLID principles. Document them by filling in the table below. Note that you don't need to give code examples itself, just provide the link to file with line numbers range (or whatever you want to clearly recognize the example you describe, e.g. file hello.ts:15-36, class Foo), you can also write free text.

Principle	Examples

Single Responsibility Principle:

https://github.com/turbolinks/turbolinks/blob/master/src/error_renderer.ts    
line number :4 Class ErrorRenderer has just one responsibility to render error message, while the logic of activating view is in Render Class.


https://github.com/desktop/desktop/blob/development/app/src/main-process/app-window.ts
Class: AppWindow is responsible for app opening, and actions related to app window

https://github.com/desktop/desktop/blob/development/app/src/main-process/crash-window.ts
Class: CrashWindow is responsible and the only responsibility of this class is to showcase error message 


https://github.com/johannesjo/super-productivity/blob/master/src/app/imex/sync/dialog-get-and-enter-auth-code/dialog-get-and-enter-auth-code.component.ts
Class has single responsibility

https://github.com/johannesjo/super-productivity/blob/master/src/app/imex/file-imex/file-imex.component.ts

	
Open / Closed Principle:

https://github.com/turbolinks/turbolinks/blob/master/src/renderer.ts
The class renderer is open for expansion and not modification and can be inherited by other renderer classes and use methods of Render Class

line number 18,29
https://github.com/johannesjo/super-productivity/blob/master/src/app/core/persistence/persistence.model.ts


Liskov Substitution Principle: 	
I have not found any repo with exact LSP principle but found a repo which has implementation of all SOLID principles. Others which I found I have added the link 
https://github.com/devbootstrap/SOLID-Principles-Examples-using-Typescript/blob/master/start/src/FileStore.ts

https://github.com/devbootstrap/SOLID-Principles-Examples-using-Typescript/blob/master/lsp/src/FileStore.ts




Interface Seggregation Principle:

https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/types/app-request.d.ts
Interface : RoleRequest, ProtectedRequest, 
ProtectedRequest : https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/routes/v1/blog/writer.ts
RoleRequest : https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/routes/v1/access/signup.ts


SyncProviderServiceInterface  in https://github.com/johannesjo/super-productivity/blob/master/src/app/imex/sync/sync-provider.model.ts


Interface LegacyAppDataComplete  is extending properties of LegacyAppBaseData
https://github.com/johannesjo/super-productivity/blob/master/src/app/core/migration/legacy-models.ts

Both Interfaces being used:
https://github.com/johannesjo/super-productivity/blob/master/src/app/core/migration/legacy-persistence.sevice.ts

nterface TaskWithCategoryText extends Text
line number :  153.167,114,119 all are inherited interfaces from different interface and being used at places
https://github.com/johannesjo/super-productivity/blob/master/src/app/features/tasks/task.model.ts

https://github.com/johannesjo/super-productivity/blob/master/src/app/core/android/android.service.ts

line number: 78,59,98,94
https://github.com/johannesjo/super-productivity/blob/master/src/app/core/data-repair/data-repair.util.ts 

Dependency Inversion Principle:	

https://github.com/turbolinks/turbolinks/blob/master/src/adapter.ts

https://github.com/turbolinks/turbolinks/blob/master/src/browser_adapter.ts

The Sync Service has an interface which is responsible for all the sync operations 
https://github.com/johannesjo/super-productivity/blob/master/src/app/imex/sync/sync-provider.model.ts

Here it uses GoogleSync
https://github.com/johannesjo/super-productivity/blob/master/src/app/imex/sync/google/google-drive-sync.service.ts
Here it uses Dropbox
https://github.com/johannesjo/super-productivity/blob/master/src/app/imex/sync/dropbox/dropbox-sync.service.ts







The above examples have an abstraction in the interface 
2.	Violations of SOLID and Other Principles
Try to find at least 3 or more (preferably) violations of the SOLID principles in the project you have chosen for Problem 1 and document it. Additionally, you can describe other (DRY / KISS / YAGNI / etc.) violations.
You may provide short descriptions about how to refactor/improve such violations.
Optionally, you can add small examples with results of such refactoring using pseudo-code or real code.


Evaluation Criteria:
0 – Nothing was done
2 – Examples of the SOLID principles was provided but contains less then 3 cases for each of them 
3 – Examples of the SOLID principles was fully done, there are no examples of violations
4 – Violations of the SOLID principles was provided as well, but each table contains less then 3 examples. 
5 – All principles covered with at least 3 or more examples of SOLID cases and violations
5+ – Results of refactoring and additional violations (DRY, KISS, YAGNI, etc.) was provided
