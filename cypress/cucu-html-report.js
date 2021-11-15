const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './reports/cucu-reports.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '93'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Indoor project'},
            {label: 'Release', value: '1'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Oct 11th 2021, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Oct 11th 2021, 02:56 PM EST'}
        ]
    }
});