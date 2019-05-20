import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './components/table/table.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { ActionTrackerComponent } from './action-tracker/action-tracker.component';
import { SlackMainComponent } from './components/slack/slack-main/slack-main.component';
import { SlackNewTaskComponent } from './components/slack/slack-new-task/slack-new-task.component';
import { SlackTaskComponent } from './components/slack/slack-task/slack-task.component';
import { SlackTaskColumnComponent } from './components/slack/slack-task-column/slack-task-column.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { AcqPlanningComponent } from './acq-planning/acq-planning.component';
import { ActiveActionComponent } from './action-tracker/active-action/active-action.component';
import { CreatePrComponent } from './action-tracker/active-action/create-pr/create-pr.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { MenuTabComponent } from './menu-tab/menu-tab.component';
import { WhsDashboardComponent } from './home/whs-dashboard/whs-dashboard.component';
import { BarChartGridComponent } from './components/charts/bar-chart-grid/bar-chart-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { DatamanagementComponent } from './components/datamanagement/datamanagement.component';
import { AcquisitionstrategyComponent } from './components/acquisitionstrategy/acquisitionstrategy.component';
import { VerticalBarComponent } from './components/charts/vertical-bar/vertical-bar.component';
import { VerticalTotalBarChartComponent } from './components/charts/vertical-total-bar-chart/vertical-total-bar-chart.component';
import { VerticalBarGridComponent } from './components/charts/vertical-bar-grid/vertical-bar-grid.component';
import { AcqProcessComponent } from './components/process/acq-process/acq-process.component';
import { AcqProcessBlockComponent } from './components/process/acq-process-block/acq-process-block.component';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { StatusTrackerComponent } from './components/status-tracker/status-tracker/status-tracker.component';
import { StatusBlockComponent } from './components/status-tracker/status-block/status-block.component';
import { StatusTrackerTimelineComponent } from './components/status-tracker/status-tracker-timeline/status-tracker-timeline.component';
import { Step1Component } from './action-tracker/active-action/create-pr/step1/step1.component';
import { Step2Component } from './action-tracker/active-action/create-pr/step2/step2.component';
import { TextInputComponent } from './action-tracker/active-action/create-pr/text-input/text-input.component';
import { SingleDropdownComponent } from './action-tracker/active-action/create-pr/single-dropdown/single-dropdown.component';
import { McqComponent } from './action-tracker/active-action/create-pr/mcq/mcq.component';
import { NaicsCodeComponent } from './action-tracker/active-action/create-pr/naics-code/naics-code.component';
import { CalendarTypeComponent } from './action-tracker/active-action/create-pr/calendar-type/calendar-type.component';
import { UploadFileComponent } from './action-tracker/active-action/create-pr/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    BarChartComponent,
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
    HeaderComponent,
    SubHeaderComponent,
    MenuTabComponent,
    WhsDashboardComponent,
    BarChartGridComponent,
    DatamanagementComponent,
    AcquisitionstrategyComponent,
    VerticalBarComponent,
    VerticalTotalBarChartComponent,
    VerticalBarGridComponent,
    AcqProcessComponent,
    AcqProcessBlockComponent,
    DocumentTableComponent,
    StatusBlockComponent,
    StatusTrackerTimelineComponent,
    Step1Component,
    Step2Component,
    TextInputComponent,
    SingleDropdownComponent,
    McqComponent,
    NaicsCodeComponent,
    CalendarTypeComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
