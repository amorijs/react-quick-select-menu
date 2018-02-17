import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuickSelectMenu from './containers/QuickSelectMenu.jsx';
import './react-qsm.scss';

const sections = [
  {
    prefix: '',
    label: 'recently opened',
    items: [{ label: 'demo.js' }, { label: 'index.html' }]
  },
  {
    prefix: '>',
    label: 'recently used',
    items: [{ label: 'Preferences: Open User Settings' }, { label: 'Sync: Upload Settings' }]
  },
  {
    prefix: '>',
    label: 'other commands',
    items: [{ label: 'Add Cursor Above' }, { label: 'Add Cursor Below' }]
  },
  {
    items: [{ label: 'Item in an unnamed section' }]
  }
];

const onMenuItemSelect = item => alert(item.label);

ReactDOM.render(
  <QuickSelectMenu onMenuItemSelect={onMenuItemSelect} menuSections={sections} />,
  document.getElementById('root')
);