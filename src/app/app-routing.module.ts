import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { PracticeComponent } from './practice/practice.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
	{
		path: ':id',
		component: ProgressComponent
	},
	{
		path: 'practice/:id',
		component: PracticeComponent
	},
	{
		path: 'lessons/:id',
		component: LessonsComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
