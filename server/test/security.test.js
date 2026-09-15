import test from 'node:test';
import assert from 'node:assert/strict';
import {constantTimeEqual,digest,maskContact,randomToken,verificationCode} from '../src/security.js';

test('session tokens are high entropy and stored as digests',()=>{
  const token=randomToken();
  assert.ok(token.length>=43);
  assert.notEqual(digest(token),token);
});

test('verification codes and contact masking do not disclose secrets',()=>{
  assert.match(verificationCode(),/^\d{6}$/);
  assert.equal(maskContact('traveller@example.com'),'tr***@example.com');
  assert.equal(maskContact('+26771234567'),'********4567');
  assert.equal(constantTimeEqual('same','same'),true);
  assert.equal(constantTimeEqual('same','other'),false);
});
