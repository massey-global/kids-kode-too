import {ViewChild, AfterViewInit, ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit, ControlValueAccessor{

    @ViewChild('amen') iframe: ElementRef; //code iframe


    /**
     * Updates the iframe based on user code
     * @param {ElementRef} - nativeElement of the iframe ie iframe.nativeElement.contentX
     */
    updateResult(doc){
	let p5  = "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js'></script>"
	let code ="<script>function setup() {}function draw(){"+this.code_submission+"}</script>";
	let content = p5+code;
    
	this.doc.open();
	this.doc.write(content);
	this.doc.close();
    }

    ngAfterViewInit() {
	
	let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
	this.doc = doc;
		
    }


    
    
}

