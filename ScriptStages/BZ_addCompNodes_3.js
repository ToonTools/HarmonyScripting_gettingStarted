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

    // get selection

    // validate that selection contains read nodes

    // list the read nodes

    // give user option to add composites to the selected read nodes

    // for each node

    // grab name of original read node

    // check if COMP_thisNodeName already exists, if it does add _01 if that exists add _02

    // grab original nodes x

    // grab original nodes y ( + add offset)

    // create compostie node of this 

    // tell user composite node created

    // tell user complete when all is completed

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