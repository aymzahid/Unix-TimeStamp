import { formatDate } from '@angular/common';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { min, timestamp } from 'rxjs';

@Component({
  selector: 'app-unix-stamp',
  templateUrl: './unix-stamp.component.html',
  styleUrls: ['./unix-stamp.component.css'],
})
export class UnixStampComponent implements OnInit {
  my_timezones: any;
  timestamp: any;
  finalStamp2: any;
  finalStamp: any;
  Year: any;
  Month: any;
  Day: any;
  Hour: any;
  Min: any;
  Sec: any;
  timestamp5: any;
  timestamp6: any;

  date2: any;

  d: any;
  d2: any;
  d3: any;

  ZoneSelected: any;
  d4: any;
  timestamp2: any;

  constructor() {
    this.tostring();
    this.timestamptoLT();
  }

  ngOnInit() {}

  getYear(Year: any) {
    this.Year = Year;
  }
  getMonth(Month: any) {
    this.Month = Month;
  }
  getDay(Day: any) {
    this.Day = Day;
  }
  getHour(Hour: any) {
    this.Hour = Hour;
  }
  getMin(Min: any) {
    this.Min = Min;
  }
  getSec(Sec: any) {
    this.Sec = Sec;
  }

  tostring() {
    this.d = new Date(
      this.Year,
      this.Month,
      this.Day,
      this.Hour,
      this.Min,
      this.Sec
    );

    this.d2 = new Date(this.d); //date for pakistan zone
    this.timestamp = Date.parse(this.d2);
    this.finalStamp = this.timestamp / 1000; //timestamp for pakistan zone
    this.date2 = new Date(this.timestamp).toString(); // date for second zone
    console.log(this.date2);

    this.d4 = this.d2.toLocaleString('en-Nz', {
      timeZone: this.ZoneSelected,
    });

    this.timestamp2 = Date.parse(this.d4) / 1000;

    console.log(this.d4);

    this.my_timezones = [
      {
        offset: 'GMT-07:00',
        name: 'America/Los_Angeles',
      },

      {
        offset: 'GMT-06:00',
        name: 'America/Denver',
      },
      {
        offset: 'GMT-06:00',
        name: 'America/Belize',
      },
      {
        offset: 'GMT-05:00',
        name: 'America/Cancun',
      },
      {
        offset: 'GMT-06:00',
        name: 'America/Chicago',
      },

      {
        offset: 'GMT-04:00',
        name: 'America/New_York',
      },
      {
        offset: 'GMT-04:30',
        name: 'America/Caracas',
      },
      {
        offset: 'GMT-04:00',
        name: 'America/Campo_Grande',
      },

      {
        offset: 'GMT',
        name: 'Europe/London',
      },
      {
        offset: 'UTC',
        name: 'UTC',
      },

      {
        offset: 'GMT+01:00',
        name: 'Europe/Amsterdam',
      },
      {
        offset: 'GMT+01:00',
        name: 'Europe/Belgrade',
      },
      {
        offset: 'GMT+01:00',
        name: 'Europe/Brussels',
      },
      {
        offset: 'GMT+02:00',
        name: 'Africa/Cairo',
      },
      {
        offset: 'GMT+02:00',
        name: 'Africa/Blantyre',
      },
      {
        offset: 'GMT+02:00',
        name: 'Asia/Beirut',
      },
      {
        offset: 'GMT+02:00',
        name: 'Asia/Damascus',
      },
      {
        offset: 'GMT+02:00',
        name: 'Asia/Gaza',
      },
      {
        offset: 'GMT+02:00',
        name: 'Asia/Jerusalem',
      },

      {
        offset: 'GMT+03:00',
        name: 'Asia/Riyadh',
      },
      {
        offset: 'GMT+03:00',
        name: 'Europe/Minsk',
      },
      {
        offset: 'GMT+03:30',
        name: 'Asia/Tehran',
      },
      {
        offset: 'GMT+04:00',
        name: 'Asia/Dubai',
      },

      {
        offset: 'GMT+03:00',
        name: 'Europe/Moscow',
      },
      {
        offset: 'GMT+04:30',
        name: 'Asia/Kabul',
      },
      {
        offset: 'GMT+05:00',
        name: 'Asia/Karachi',
      },
      {
        offset: 'GMT+05:30',
        name: 'Asia/Kolkata',
      },
      {
        offset: 'GMT+05:45',
        name: 'Asia/Katmandu',
      },
      {
        offset: 'GMT+06:00',
        name: 'Asia/Dhaka',
      },
      {
        offset: 'GMT+07:00',
        name: 'Asia/Bangkok',
      },
      {
        offset: 'GMT+07:00',
        name: 'Asia/Novosibirsk',
      },
      {
        offset: 'GMT+08:00',
        name: 'Etc/GMT+8',
      },
      {
        offset: 'GMT+08:00',
        name: 'Asia/Hong_Kong',
      },

      {
        offset: 'GMT+08:00',
        name: 'Australia/Perth',
      },

      {
        offset: 'GMT+09:00',
        name: 'Asia/Seoul',
      },
      {
        offset: 'GMT+09:00',
        name: 'Asia/Tokyo',
      },
      {
        offset: 'GMT+09:30',
        name: 'Australia/Adelaide',
      },
      {
        offset: 'GMT+09:30',
        name: 'Australia/Darwin',
      },

      {
        offset: 'GMT+10:00',
        name: 'Australia/Brisbane',
      },
      {
        offset: 'GMT+10:00',
        name: 'Australia/Hobart',
      },
      {
        offset: 'GMT+9:00',
        name: 'Asia/Yakutsk',
      },

      {
        offset: 'GMT-4:00',
        name: 'Pacific/Norfolk',
      },
      {},
    ];
  }

  // convert() {
  //   this.tostring();
  //   this.timestamptoLT();
  // }
  timestamptoLT() {
    this.ZoneSelected = '';
    // this.ZoneSelected = val;

    // const timeStamp = 1647597003;
    // const unixTime = this.timeStampVal;
    // this.d3 = new Date(this.timestamp);
    //
    // console.log(intlDateObj);
  }
}
