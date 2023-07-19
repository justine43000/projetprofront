import * as React from 'react';
import "./Calendrier.css"
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    WeekView,
    EditRecurrenceMenu,
    ConfirmationDialog,
    Toolbar,
    DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';


export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentDate: new Date().toISOString().split('T')[0],
            addedAppointment: {},
            appointmentChanges: {},
            editingAppointment: undefined,
        };

        this.commitChanges = this.commitChanges.bind(this);
        this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
        this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
        this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
    }

    changeAddedAppointment(addedAppointment) {
        this.setState({ addedAppointment });
    }

    changeAppointmentChanges(appointmentChanges) {
        this.setState({ appointmentChanges });
    }

    changeEditingAppointment(editingAppointment) {
        this.setState({ editingAppointment });
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const {
            currentDate, data, addedAppointment, appointmentChanges, editingAppointment,
        } = this.state;

        return (
            <Paper>
                <Scheduler
                    data={data}
                    height={660}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <Toolbar />
                    < DateNavigator />
                    <EditingState
                        onCommitChanges={this.commitChanges}
                        addedAppointment={addedAppointment}
                        onAddedAppointmentChange={this.changeAddedAppointment}
                        appointmentChanges={appointmentChanges}
                        onAppointmentChangesChange={this.changeAppointmentChanges}
                        editingAppointment={editingAppointment}
                        onEditingAppointmentChange={this.changeEditingAppointment}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={17}
                    />
                    <EditRecurrenceMenu />
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    />
                    <AppointmentForm />
                </Scheduler>
            </Paper>
        );
    }
}
