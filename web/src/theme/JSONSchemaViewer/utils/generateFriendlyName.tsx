import React from 'react';
import GenerateFriendlyName from '@theme-original/JSONSchemaViewer/utils/generateFriendlyName';

export default function GenerateFriendlyNameWrapper(props) {
  const { schema } = props;

  return (
    <>
      <GenerateFriendlyName {...props} />
      {
        // check for const value and show this value in this summary if exists
        "const" in schema
          ? <span>
              <> = </><code>{JSON.stringify(schema.const)}</code>
            </span>
          : <></>
      }
    </>
  );
}
