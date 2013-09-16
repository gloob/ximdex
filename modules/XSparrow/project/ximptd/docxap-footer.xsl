<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template name="docxap-footer" match="docxap-footer">
   
                   	<xsl:text disable-output-escaping="yes">
                     	<![CDATA[<!DOCTYPE html>]]>
      		</xsl:text>
       		<html lang="en">
                         <head>
                           <xsl:call-template name="INCLUDE-css"/>
                           <xsl:call-template name="INCLUDE-style"/>
                         </head>
                         <body uid="{@uid}">
                           <xsl:apply-templates select="/docxap/footer"/>
                         </body>
                 	</html>
   </xsl:template>
</xsl:stylesheet>