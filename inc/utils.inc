<?php
// DONT USE THIS FILE IS HIGHLY DEPRECATED.


/******************************************************************************
 *  Ximdex a Semantic Content Management System (CMS)    							*
 *  Copyright (C) 2011  Open Ximdex Evolution SL <dev@ximdex.org>	      *
 *                                                                            *
 *  This program is free software: you can redistribute it and/or modify      *
 *  it under the terms of the GNU Affero General Public License as published  *
 *  by the Free Software Foundation, either version 3 of the License, or      *
 *  (at your option) any later version.                                       *
 *                                                                            *
 *  This program is distributed in the hope that it will be useful,           *
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of            *
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the             *
 *  GNU Affero General Public License for more details.                       *
 *                                                                            *
 * See the Affero GNU General Public License for more details.                *
 * You should have received a copy of the Affero GNU General Public License   *
 * version 3 along with Ximdex (see LICENSE).                                 *
 * If not, see <http://gnu.org/licenses/agpl-3.0.html>.                       *
 *                                                                            *
 * @version $Revision: $                                                      *  
 *                                                                            *
 *                                                                            *
 ******************************************************************************/


if (!defined('XIMDEX_ROOT_PATH'))
        define('XIMDEX_ROOT_PATH', realpath(dirname(__FILE__) . '/../'));


/// Se incluyen las otras librerias de utilidades a partir de utils.inc, que es incluida por todo el sistema.
//require_once (XIMDEX_ROOT_PATH . '/inc/modules/ModulesManager.class.php');
include_once (XIMDEX_ROOT_PATH . '/inc/modules/ModulesManager.class.php');

ModulesManager::file('/inc/persistence/XSession.class.php');
ModulesManager::file('/conf/install-params.conf.php');
ModulesManager::file('/mesg/MesgEvent.class.php');
ModulesManager::file('/mesg/MesgFolder.class.php');
ModulesManager::file('/mesg/mesgLeftBar.inc');
ModulesManager::file('/inc/mvc/drawers/gprint.inc');
ModulesManager::file('/inc/persistence/Config.class.php');
ModulesManager::file('/conf/install-modules.conf');
ModulesManager::file('/inc/db/db.inc');
ModulesManager::file('/inc/db/db.inc');
ModulesManager::file("/inc/persistence/datafactory.inc");
ModulesManager::file("/inc/sync/synchro.inc");
ModulesManager::file("/inc/workflow/Workflow.class.php");
ModulesManager::file("/inc/model/user.inc");
ModulesManager::file("/inc/model/group.inc");
ModulesManager::file("/inc/model/role.inc");
ModulesManager::file("/inc/model/permissions.inc");
ModulesManager::file("/inc/model/channel.inc");
ModulesManager::file("/inc/model/language.inc");
ModulesManager::file("/inc/model/node.inc");
ModulesManager::file("/inc/model/nodetype.inc");
ModulesManager::file("/inc/model/action.inc");
ModulesManager::file("/inc/model/structureddocument.inc");
ModulesManager::file("/inc/log/XMD_log.class.php");
ModulesManager::file("/inc/persistence/XSession.class.php");
ModulesManager::file("/inc/mvc/Request.class.php");
?>
