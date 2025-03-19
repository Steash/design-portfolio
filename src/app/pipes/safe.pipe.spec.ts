import { SafePipe } from './safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafePipe', () => {
  it('create an instance', () => {
    const sanitizer = TestBed.inject(DomSanitizer);
    const pipe = new SafePipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
