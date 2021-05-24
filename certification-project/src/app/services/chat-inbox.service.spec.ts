import { TestBed } from '@angular/core/testing';

import { ChatInboxService } from './chat-inbox.service';

describe('ChatInboxService', () => {
  let service: ChatInboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatInboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
