/*---------------------------------------------------------------------

Name:           BZ_addCompNodes.js
Short Desc:     adds composite notes into a scene
Long Desc:      it adds a single composite node for each selected read not in the user's selection
Documentation:  -
Copyright:      Blue Zoo Productions - 2024 
Author:         Chris Carter
Version:        v1.0
Software:       tested in Harmony v22.0.3
Dependencies:   -

Changelog:
    11/08/2024 - Chris Carter - created the script

*///-------------------------------------------------------------------

function BZ_addComp_toReadNodes (){
  // will add composites to the read nodes in the selection
  // input  : user selection of nodes
  // output : additional composites in the scene 
  MessageLog.trace("BZ_addComp_toReadNodes : Started ") 
  scene.beginUndoRedoAccum("BZ_addComp_toReadNodes");
  try
  {
    //---------------this is where i write the relevant code -----
















    // --------------------------------------------------------------
    MessageLog.trace("BZ_addComp_toReadNodes : Success ") 
  }
  catch(error)
  {
    MessageLog.trace("Error : BZ_addComp_toReadNodes : " + error) 
  }
  finally
  {
    scene.endUndoRedoAccum("BZ_addComp_toReadNodes");
  }
}