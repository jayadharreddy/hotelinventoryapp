import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;
  title = 'Room List';
  constructor() { };


  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };
  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent, {static: true}) headerComponent! : HeaderComponent;

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'AC, Free Wifi, TV, BathRoom, Kitchen',
        price: 500,
        photos: './assets/settipi.j.reddy.jpg',
        checkInTime: new Date('11-Nov-2019'),
        checkOutTime: new Date('12-Nov-2019'),
        rating: 4.6,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'AC, Free Wifi, TV, Kitchen',
        price: 450,
        photos: './assets/settipi.j.reddy.jpg',
        checkInTime: new Date('11-Dec-2019'),
        checkOutTime: new Date('12-Dec-2019'),
        rating: 3.453,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'AC, Free Wifi, TV, Kitchen',
        price: 1450,
        photos: './assets/settipi.j.reddy.jpg',
        checkInTime: new Date('11-Dec-2019'),
        checkOutTime: new Date('12-Dec-2019'),
        rating: 3.8,
      }
    ]
  };
  ngDoCheck() {
    console.log('on changes is called...')
  }
  ngAfterViewInit() {
    this.headerComponent.title ='Rooms View';
    console.log(this.headerComponent);
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Suite',
      amenities: 'AC, Free Wifi, TV, Bath Room, Kitchen',
      price: 3450,
      photos: './assets/settipi.j.reddy.jpg',
      checkInTime: new Date('11-Dec-2021'),
      checkOutTime: new Date('12-Dec-2021'),
      rating: 4.5,
    }
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}
