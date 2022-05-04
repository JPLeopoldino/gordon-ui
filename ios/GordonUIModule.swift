//
//  GordonUIModule.swift
//  GordonUIModule
//
//  Copyright © 2022 João Pedro Leopoldino. All rights reserved.
//

import Foundation

@objc(GordonUIModule)
class GordonUIModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
