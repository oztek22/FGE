import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './components/table/table.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { StatusTrackerComponent } from './components/charts/status-tracker/status-tracker.component';
import { ActionTrackerComponent } from './action-tracker/action-tracker.component';
import { SlackMainComponent } from './components/slack/slack-main/slack-main.component';
import { SlackNewTaskComponent } from './components/slack/slack-new-task/slack-new-task.component';
import { SlackTaskComponent } from './components/slack/slack-task/slack-task.component';
import { SlackTaskColumnComponent } from './components/slack/slack-task-column/slack-task-column.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { AcqPlanningComponent } from './acq-planning/acq-planning.component';
import { ActiveActionComponent } from './action-tracker/active-action/active-action.component';
import { CreatePrComponent } from './action-tracker/active-action/create-pr/create-pr.component';
import { RadioDropdownComponent } from './components/questions/radio-dropdown/radio-dropdown.component';
import { RadioComponent } from './components/questions/radio/radio.component';
import { DropdownTextComponent } from './components/questions/dropdown-text/dropdown-text.component';
import { CalendarDurationComponent } from './components/questions/calendar-duration/calendar-duration.component';
import { UploadFileComponent } from './components/questions/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    BarChartComponent,
    PieChartComponent,
    StatusTrackerComponent,
    ActionTrackerComponent,
    SlackMainComponent,
    SlackNewTaskComponent,
    SlackTaskComponent,
    SlackTaskColumnComponent,
    ConversationComponent,
    AcqPlanningComponent,
    ActiveActionComponent,
    CreatePrComponent,
    RadioDropdownComponent,
    RadioComponent,
    DropdownTextComponent,
    CalendarDurationComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
