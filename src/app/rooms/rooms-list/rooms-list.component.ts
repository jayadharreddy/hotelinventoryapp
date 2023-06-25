import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit{
  @Input() rooms: RoomsList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomsList>();
  ngOnInit(): void {

  }
  selectRoom(room: RoomsList){
    this.selectedRoom.emit(room);
  }
}
